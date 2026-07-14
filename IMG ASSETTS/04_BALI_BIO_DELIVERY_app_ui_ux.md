# Bali Bio Fruits & Vegetables Delivery — App UI and UX Suggestions

Date: 2026-06-09  
Product type: PWA shopping app for iOS and Android access  
Working brand used in examples: **Bali Harvest**

---

## 1. Verification Status

### Verified

- A PWA is a web app built with web platform technologies that can provide an app-like experience across platforms.
- PWA installability and behavior depend on browser/platform support and implementation.
- Web.dev warns that on Android and iOS, users cannot install PWAs from many in-app browsers such as Facebook Mobile Browser, Instagram, Google Search App or Gmail.
- A PWA typically needs a web app manifest and service worker for installability/offline/app-like behavior.

### Inferred for this project

- PWA is appropriate for MVP because the business needs speed, lower development cost and direct QR/social acquisition.
- Native iOS/Android apps are not necessary at launch unless App Store / Play Store presence becomes commercially important.
- QR leaflets and stickers work better with a PWA than with a native app because users can open immediately without app-store friction.

### Cannot be verified from here

- Exact iOS behavior on the user’s future target devices and iOS versions.
- Payment gateway support before choosing a provider.
- Push notification reliability on all user devices.
- Whether customers will install the PWA or mostly use it as a mobile website.
- App Store approval if later wrapped as a native app.

---

## 2. UX Objective

The app must make fresh produce buying feel:

- easy
- trustworthy
- clean
- quick
- source-transparent
- premium
- local
- not chaotic
- not like supermarket browsing

The user should be able to order a weekly basket in less than 60 seconds after first registration.

---

## 3. User Types

### 1. New expat customer

Needs:

- understand what the service is
- see delivery zone availability
- trust product source
- make first order quickly

### 2. Returning household customer

Needs:

- reorder previous box
- edit basket
- choose delivery slot
- pay fast

### 3. Villa manager / housekeeper

Needs:

- repeat large orders
- simple WhatsApp confirmation
- address notes
- invoice
- delivery instructions

### 4. Wellness user

Needs:

- greens
- fruits
- smoothie items
- subscriptions
- diet tags

### 5. Admin/operator

Needs:

- daily availability control
- order list by zone
- substitutions
- packing list
- delivery status
- supplier list

---

## 4. Core Navigation

Recommended bottom navigation:

1. **Home**
2. **Shop**
3. **Boxes**
4. **Orders**
5. **Account**

### Why this works

- Home explains what is fresh today.
- Shop allows individual products.
- Boxes pushes the profitable curated product.
- Orders supports reorder.
- Account contains address, zone, subscription and support.

---

## 5. Home Screen Structure

### Header

- logo
- delivery zone badge
- next delivery date
- cart icon

Example:

**Bali Harvest**  
Delivering tomorrow to Canggu  
Cart

### Hero block

Title:

**Local Bali harvest, delivered to your door.**

Subtitle:

Fresh fruit, vegetables and weekly boxes from selected Bali growers.

CTA:

- Shop today’s harvest
- Choose a weekly box

### Core trust row

Use 3 simple icons:

- Source-tracked
- Packed fresh
- Delivered by zone

### Fresh this week

Horizontal product cards:

- mango
- papaya
- pineapple
- spinach
- avocado
- herbs

### Weekly boxes

Show 3 cards:

- Tropical Fruit Box
- Family Produce Box
- Greens & Smoothie Box

### Source story

Small card:

**This week from Baturiti / Bedugul / selected Bali growers**

Button: See sources

---

## 6. Product Catalog UX

### Product categories

- Fruits
- Vegetables
- Greens
- Herbs
- Boxes
- Add-ons

### Filters

Keep filters minimal:

- available tomorrow
- ripe today
- local Bali
- organic verified
- good for smoothies
- good for cooking
- family size

### Product card fields

Each product card should show:

- image
- name
- unit
- price
- source label
- ripeness/freshness badge
- add button
- availability

Example:

**Papaya — Sweet Matured**  
Selected Bali grower  
Rp XX / piece  
Ripe today  
Add

### Product detail page

Required sections:

1. product image
2. name and unit
3. price
4. source / farm / supplier
5. availability date
6. ripeness information
7. storage tips
8. substitution policy
9. add to cart
10. related products

---

## 7. Source Tracking UX

This is the key differentiator.

### Source label types

| Label | Meaning |
|---|---|
| Farm verified | sourced from named farm/grower |
| Supplier verified | sourced from named supplier |
| Market selected | bought from selected local market vendor |
| Organic certified | only if documentation exists |
| Naturally grown | only if supplier statement exists |
| Seasonal | availability changes |

### QR source card

Each delivery should include a QR card leading to an order page:

**Your Harvest Source**

- order date
- delivery zone
- product list
- farm/supplier source
- packed by
- storage guide
- reorder button

### Important rule

Do not invent farm details. If exact source is not known, show:

**Selected Bali supplier — exact farm not confirmed.**

Honesty increases trust.

---

## 8. Cart UX

The cart should be extremely clear.

### Cart sections

1. Items
2. Delivery zone
3. Delivery date
4. Substitution preferences
5. Packaging note
6. Promo/referral code
7. Total
8. Checkout button

### Substitution preference

Because fresh produce availability changes, the app needs this choice:

- Allow similar substitute
- Contact me before substitute
- Remove unavailable item

This is essential for operational reality.

---

## 9. Checkout UX

### Step 1 — Address

Fields:

- name
- WhatsApp number
- email optional
- delivery address
- map pin optional
- delivery zone
- villa name / room / banjar note
- driver instruction

### Step 2 — Delivery

- next available delivery date
- time window
- delivery fee
- free delivery threshold
- zone notice

Example:

Delivery to Canggu tomorrow, 10:00–14:00  
Free above Rp XXX  
Rp XX delivery below threshold

### Step 3 — Payment

MVP options:

- QRIS
- bank transfer
- cash on delivery only if needed
- payment gateway later

### Step 4 — Confirmation

Show:

- order number
- WhatsApp confirmation
- delivery date
- what happens if product is unavailable
- support button

---

## 10. Delivery Zone UX

The app should ask delivery zone early.

### Best flow

1. User opens app.
2. App asks: “Where do you want delivery?”
3. User selects:
   - Canggu
   - Pererenan
   - Seminyak
   - Sanur
   - Ubud
   - Uluwatu
   - Other
4. App shows:
   - next delivery day
   - delivery fee
   - availability

### Zone message examples

**Canggu / Berawa / Pererenan**  
Next-day delivery available Monday–Saturday.

**Ubud**  
Delivery available on selected route days.

**Outside core zone**  
Leave your WhatsApp. We will confirm the next route.

---

## 11. Subscription UX

Subscriptions should be introduced early because they create predictable demand.

### Subscription products

- Weekly Tropical Fruit Box
- Weekly Family Produce Box
- Weekly Greens Box
- Twice-weekly Villa Box

### Subscription settings

- frequency
- box size
- address
- delivery day
- pause
- skip next week
- add extras
- WhatsApp reminders

### Subscription flow

1. Choose box.
2. Choose size.
3. Choose frequency.
4. Choose delivery zone/day.
5. Confirm payment method.
6. Receive weekly WhatsApp reminder before packing.

---

## 12. Admin UX

The admin interface is as important as the customer app.

### Admin modules

1. Dashboard
2. Products
3. Daily availability
4. Suppliers
5. Orders
6. Packing
7. Delivery zones
8. Substitutions
9. Customers
10. Reports

### Daily availability screen

Fields:

- product
- supplier
- available quantity
- unit
- cost
- retail price
- source label
- organic status
- ripeness
- available delivery date
- notes

### Order management

Statuses:

- received
- confirmed
- sourcing
- packed
- out for delivery
- delivered
- issue
- refunded/cancelled

### Packing list

Filter by:

- delivery date
- zone
- driver
- box type
- order status

Packing list should show:

- customer name
- order number
- items
- substitutions
- packaging type
- notes

### Supplier management

Fields:

- supplier name
- contact
- WhatsApp
- location
- product categories
- certification documents
- reliability rating
- quality notes
- payment terms
- last order
- active/inactive

---

## 13. UI Style

### Visual language

- warm cream background
- green primary CTA
- large photography
- soft shadows or thin borders
- no heavy black
- no neon colors
- no supermarket red/yellow discounts
- no cluttered grids
- generous spacing
- very clear prices

### Components

- product card
- source badge
- ripeness badge
- zone selector
- box card
- order status timeline
- substitution selector
- QR source card
- subscription card

### Product image rules

Use real images, not AI-looking fruit.

Recommended image direction:

- natural daylight
- simple cream/wood background
- real Bali fruits
- avoid over-saturated colors
- show scale where useful
- no stock-photo supermarket look

---

## 14. Critical UX Details

### First-time user onboarding

Keep it short:

1. What is your delivery area?
2. Do you want individual products or a box?
3. WhatsApp number for delivery confirmation.

Do not force full account registration before browsing.

### Guest checkout

Allow guest checkout with WhatsApp number.

### WhatsApp integration

Use WhatsApp as support layer, not as the whole app.

Buttons:

- ask about my order
- change address
- report issue
- repeat order

### Reorder

Add big button:

**Repeat last order**

This is very important for weekly use.

### Trust

Every product should show one trust marker:

- source confirmed
- seasonal
- organic verified
- low-waste packed
- local Bali

---

## 15. Recommended MVP Screen List

### Customer PWA

1. Splash / landing
2. Delivery zone selector
3. Home
4. Shop category
5. Product detail
6. Box detail
7. Cart
8. Checkout address
9. Checkout delivery
10. Checkout payment
11. Order confirmation
12. Order status
13. Reorder
14. Subscription
15. Account
16. Support

### Admin

1. Admin login
2. Order dashboard
3. Daily availability
4. Product manager
5. Supplier manager
6. Packing list
7. Delivery route list
8. Customer list
9. Substitution/refund log
10. Basic analytics

---

## 16. Data Model Suggestions

These are suggested entities, not verified implementation requirements.

### products

- id
- name
- category
- unit
- description
- image_url
- active
- default_price
- source_label
- organic_status
- storage_tip
- ripeness_options

### suppliers

- id
- name
- location
- contact_name
- whatsapp
- source_type
- certification_notes
- active
- reliability_score

### product_availability

- id
- product_id
- supplier_id
- date
- available_quantity
- purchase_cost
- retail_price
- delivery_date
- ripeness
- notes

### orders

- id
- customer_id
- status
- delivery_zone
- delivery_address
- delivery_date
- delivery_fee
- subtotal
- total
- substitution_preference
- payment_status
- notes

### order_items

- id
- order_id
- product_id
- quantity
- unit_price
- supplier_id
- substitution_status

### delivery_zones

- id
- name
- fee
- free_delivery_threshold
- active_days
- cut_off_time
- notes

### subscriptions

- id
- customer_id
- box_type
- frequency
- delivery_day
- status
- pause_until
- notes

---

## 17. Technical Recommendation

### MVP

- Next.js / React
- PWA manifest
- service worker
- Supabase database
- Supabase Storage
- simple admin dashboard
- mobile-first responsive design
- WhatsApp support links

### Later

- payment gateway
- automated WhatsApp notifications
- route optimization
- driver app or driver view
- customer loyalty wallet
- native wrapper if needed
- push notifications if reliable enough

---

## 18. PWA-Specific Notes

A PWA is good for this because:

- QR stickers can open the app instantly
- social ads can lead directly to product pages
- no app-store installation barrier
- one codebase can serve iOS and Android users
- fast MVP

But:

- installation behavior differs by browser/platform
- in-app browsers may block or limit installation
- push notifications and background behavior can vary
- many users may not install; design it to work perfectly as a mobile website

Therefore, design the PWA as:

**mobile website first, installable app second.**

---

## 19. Final UX Recommendation

The best product is not a complex grocery marketplace.

The best product is:

1. open app
2. see tomorrow’s harvest
3. choose a box or a few products
4. see source and freshness
5. select delivery zone
6. pay / confirm
7. receive clean packaged produce
8. reorder next week

The entire UI should push the user toward a trusted weekly habit.

---

## Sources Checked

- Web.dev PWA: https://web.dev/learn/pwa/progressive-web-apps
- MDN PWA: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- Bali Organic delivery: https://www.baliorganic.id/delivery/
- Bali Direct: https://balidirectstore.com/
- Island Organics delivery: https://www.islandorganicsbali.com/pages/delivery
- Island Organics harvest box: https://www.islandorganicsbali.com/pages/harvest-box
