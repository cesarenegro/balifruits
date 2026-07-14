import { DEFAULT_AUTH } from './config.js';
import { db } from './db.js';

const SESSION_KEY = 'BF_CRM_SESSION';

export const auth = {
  async login(username, password) {
    // 1. Basic fallback validation
    if (
      username.toLowerCase() === DEFAULT_AUTH.username.toLowerCase() &&
      password === DEFAULT_AUTH.password
    ) {
      this.createSession(username);
      return { success: true, user: username };
    }

    // 2. Supabase Auth validation (if Supabase is active)
    if (db.isSupabase && window.supabaseClient) {
      try {
        const { data, error } = await window.supabaseClient.auth.signInWithPassword({
          email: username, // Assuming username represents email in Supabase
          password: password
        });

        if (!error && data.user) {
          this.createSession(data.user.email);
          return { success: true, user: data.user.email };
        }
      } catch (err) {
        console.error('Supabase Auth error:', err);
      }
    }

    return { success: false, message: 'Invalid username or password' };
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.hash = '#login';
  },

  isAuthenticated() {
    return localStorage.getItem(SESSION_KEY) !== null;
  },

  getCurrentUser() {
    return localStorage.getItem(SESSION_KEY);
  },

  createSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      user,
      loggedInAt: new Date().toISOString()
    }));
  }
};
