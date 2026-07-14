# STUDIO CINEMA IPAD DOCENTI
## Specifica Completa per Coder Xcode / SwiftUI

Data: 30 giugno 2026  
Piattaforma target: iPadOS  
Stack richiesto: SwiftUI + Supabase client read-only sulle tabelle esistenti  
Obiettivo: progettare e costruire una nuova app iPad per docenti Studio Cinema senza alterare o mettere a rischio il CRM attuale

---

## 1. Scopo del documento

Questo documento definisce le regole tecniche, UX, UI e operative per la nuova app docenti Studio Cinema.

L'app serve a:

- far accedere il docente con il proprio account
- mostrargli solo corsi, classi e lezioni di sua competenza
- permettergli di entrare in una lezione
- vedere l'elenco degli allievi con foto e dati essenziali
- compilare una valutazione per ogni allievo
- inviare la valutazione in modo sicuro verso il sistema centrale
- evitare qualunque impatto distruttivo sul CRM o sul database Supabase esistente

Questo documento e' volutamente rigido: la priorita' assoluta e' non rompere nulla del sistema attuale.

---

## 2. Principio guida non negoziabile

### Regola madre

**Non modificare nessuna tabella esistente su Supabase.**

Questo significa:

- nessun `ALTER TABLE`
- nessun rename di colonne
- nessuna delete o truncate
- nessuna modifica a RLS esistenti
- nessuna modifica a trigger esistenti
- nessuna modifica a view esistenti
- nessuna modifica a funzioni SQL esistenti
- nessun cambio di semantica dei campi esistenti

### Regola operativa

Sulle tabelle esistenti il coder Xcode deve fare solo:

- `SELECT`
- letture mirate
- fetch paginati o filtrati
- mapping client-side

### Eccezione possibile

Se in futuro servira' persistere valutazioni reali:

- non si tocca nessuna tabella attuale
- si crea solo un layer nuovo e isolato
- ogni nuova struttura deve essere approvata esplicitamente prima
- ogni scrittura deve passare da un endpoint server-side dedicato, mai da scritture libere su tabelle legacy

Finche' questa approvazione non esiste, l'app docenti va progettata in modalita' **safe read-first**.

---

## 3. Contesto reale dell'app studente esistente

Dall'analisi dell'app iOS esistente emerge che:

- studenti, corsi, classi, lezioni, docenti e notifiche esistono gia' in Supabase
- l'app usa gia' `students`, `student_classes`, `student_courses`, `classes`, `courses`, `lessons`, `teachers`, `app_notifications`, `attendances`
- la sezione `VALUTAZIONI` dell'app studente non e' ancora un vero modulo valutazioni strutturato
- oggi quella sezione legge principalmente le presenze e le note da `attendances`

Conclusione:

- il sistema ha gia' una base dati sufficiente per una app docenti in lettura
- il sistema non ha ancora, allo stato attuale, un dominio valutazioni robusto da riusare cosi' com'e'
- quindi la nuova app va costruita con forte separazione tra **consultazione sicura** e **futuro invio valutazioni**

---

## 4. Obiettivo funzionale della nuova app iPad docenti

### User story principale

Il docente:

1. apre l'app su iPad
2. effettua login
3. vede i corsi dove insegna
4. sceglie un corso
5. entra in una classe
6. seleziona una lezione
7. vede la lista di tutti gli allievi con foto
8. tocca un allievo
9. compila una valutazione
10. invia la valutazione in modo sicuro

### Obiettivo tecnico reale

La V1 deve essere costruita in modo che:

- l'interfaccia docenti sia pronta
- il flusso dati in lettura sia stabile
- il CRM non sia toccato
- la parte di pubblicazione valutazioni sia isolata e sostituibile

---

## 5. Scelta tecnica raccomandata

### Piattaforma

- app nativa iPadOS
- SwiftUI
- orientamento principalmente landscape
- supporto portrait opzionale, non prioritario

### Pattern architetturale

- SwiftUI
- MVVM
- service layer separato
- model layer puro
- dependency injection semplice

### Strati minimi

- `App`
- `Core`
- `DesignSystem`
- `Models`
- `Services`
- `Features/Auth`
- `Features/Courses`
- `Features/Classes`
- `Features/Lessons`
- `Features/Students`
- `Features/Evaluations`

---

## 6. Regole ferree Supabase / CRM

### 6.1 Cosa e' vietato

Il coder non deve:

- modificare lo schema Supabase esistente
- usare `insert`, `update`, `upsert`, `delete` su tabelle esistenti del dominio attuale
- scrivere direttamente su `attendances`, `students`, `teachers`, `courses`, `lessons`, `app_notifications`
- riusare impropriamente campi legacy come `attendances.notes` per simulare un sistema valutazioni
- introdurre shortcut lato client che scrivono in DB solo per "far funzionare subito" il flusso
- toccare policy RLS o trigger
- creare dipendenze forti dal CRM attuale se non strettamente necessarie

### 6.2 Cosa e' permesso

E' permesso:

- leggere dati esistenti
- filtrare client-side
- creare view model locali
- simulare l'invio valutazione con un adapter astratto
- preparare il codice per un endpoint futuro dedicato

### 6.3 Regola sulle future scritture

Quando verra' abilitata la pubblicazione reale delle valutazioni:

- la scrittura dovra' passare solo da una Edge Function o API server-side dedicata
- l'app iPad non dovra' mai scrivere liberamente nelle tabelle operative del CRM
- il server dovra' validare il docente, la lezione, lo studente e i permessi

### 6.4 Filosofia di sicurezza

**Read from existing. Write only to isolated future layer. Never mutate legacy CRM structures from the iPad client.**

---

## 7. Fonti dati consentite in lettura

Le tabelle esistenti che possono essere lette, se gia' usate e disponibili, sono:

- `profiles`
- `students`
- `student_classes`
- `student_courses`
- `classes`
- `courses`
- `lessons`
- `teachers`
- `course_teachers`
- `attendances`

Uso consentito:

- capire a quali corsi/classi/lezioni appartiene un docente
- ottenere roster studenti
- mostrare foto docente e foto studente se presenti
- mostrare calendario lezioni
- arricchire il contesto UI

Uso non consentito:

- reinterpretare queste tabelle come storage definitivo delle nuove valutazioni

---

## 8. Architettura funzionale raccomandata

### 8.1 V1 Safe Mode

La prima versione deve essere progettata con due modalita':

#### Modalita A: Read-only production-safe

- login
- consultazione corsi
- consultazione classi
- consultazione lezioni
- roster studenti
- dettaglio studente
- form valutazione locale non persistente oppure persistita solo in stato locale temporaneo

#### Modalita B: Publish-ready abstraction

- il form valutazione chiama un protocollo astratto
- implementazione iniziale: mock / disabled submit / preview payload
- implementazione futura: API sicura server-side

### 8.2 Protocollo da usare

```swift
protocol EvaluationPublishing {
    func publish(_ payload: TeacherEvaluationPayload) async throws
}
```

Implementazioni previste:

- `PreviewEvaluationPublisher`
- `DisabledEvaluationPublisher`
- `RemoteEvaluationPublisher`

In V1 production-safe si puo' usare `DisabledEvaluationPublisher`.

---

## 9. Dati minimi che l'app docenti deve mostrare

### 9.1 Corso

- titolo
- categoria
- docente/i
- location
- anno accademico se disponibile

### 9.2 Classe

- nome classe
- corso di appartenenza
- numero studenti
- stato

### 9.3 Lezione

- titolo
- docente
- data
- orario
- luogo
- stato

### 9.4 Studente

- nome completo
- foto profilo se esiste
- eventuale ruolo/indirizzo se utile
- classe
- corso

---

## 10. Flusso UX consigliato per iPad

### 10.1 Navigation model

Usare una struttura a 3 colonne stile iPad:

1. colonna sinistra: corsi
2. colonna centrale: classi o lezioni
3. colonna destra: roster studenti o dettaglio studente

### 10.2 Percorso ideale

`Login -> Corsi -> Classi -> Lezioni -> Studenti -> Valutazione`

### 10.3 Comportamento desiderato

- selezione rapida
- pochissimi tap
- contesto sempre visibile
- nessun modal confusionario per la navigazione primaria
- modale o sheet solo per valutazione e conferma invio

---

## 11. Schermate richieste

### 11.1 Login docente

- logo Studio Cinema
- email
- password
- CTA primaria
- gestione errore sobria

### 11.2 Home docenti

- lista corsi assegnati
- card scure editoriali
- stato delle prossime lezioni
- header forte con titolo rosso Studio Cinema
- piccole stat cards KPI nella parte alta
- ricerca e filtro sempre visibili sopra la lista

### 11.3 Vista classi

- elenco classi del corso selezionato
- numero allievi
- docente principale
- prossima lezione

### 11.4 Vista lezioni

- lezioni della classe selezionata
- filtro per data
- badge stato

### 11.5 Roster studenti

- foto
- nome
- stato valutazione per quella lezione
- ricerca
- ordinamento alfabetico
- row molto pulite su fondo dark
- badge di stato o ruolo in outline rosso
- chevron finale o affordance chiara per entrare nel dettaglio

### 11.6 Scheda studente

- foto grande
- nome
- corso/classe
- eventuali note informative in sola lettura
- pulsante `Valuta`

### 11.7 Form valutazione

- voto generale
- criteri
- nota visibile allo studente
- nota privata docente o CRM separata solo se supportata in futuro
- stato draft / pronta / inviata
- presenza con 3 stati chiari: `Presente`, `Assente`, `Ritardo`
- feedback rapido a chip selezionabili
- CTA finale larga e molto evidente in rosso brand

### 11.8 Schermata conferma invio

- riepilogo sintetico
- conferma esplicita
- eventuale messaggio di blocco se publish reale non ancora attivo

---

## 12. Struttura della valutazione lato UI

La UI deve essere gia' pensata per una valutazione vera, anche se il backend definitivo non e' ancora attivato.

### Campi consigliati

- `overallScore`
- `performance`
- `presence`
- `voiceDiction`
- `focusDiscipline`
- `notesForStudent`
- `privateNotes`

### Regole UX

- voto rapido 1-10 o slider con step da 0.5
- criteri sempre leggibili
- testo note multilinea
- draft locale automatico

### Regola importante

Anche se la UI gestisce `privateNotes`, il coder non deve assumere che esista gia' un campo DB equivalente.

---

## 13. Strategia dati consigliata

### 13.1 Read path

Il read path puo' essere basato su:

- docente -> corsi
- corso -> classi
- classe -> lezioni
- lezione -> studenti

### 13.2 Write path

Il write path deve essere astratto.

Per ora:

- non scrivere su tabelle legacy
- non improvvisare mapping
- non usare hack su campi `notes`

### 13.3 Caching

Consentito:

- caching locale leggero
- immagini
- roster
- ultime selezioni

Non consentito:

- caching che faccia sembrare inviata una valutazione se il server non l'ha confermata

---

## 14. Brand UI obbligatorio

La nuova app deve usare il brand Studio Cinema, in modo coerente ma piu' produttivo del sito marketing.

### 14.1 Direzione visiva

L'app deve apparire:

- dark-first
- cinematografica
- autorevole
- premium
- editoriale
- leggibile

Non deve sembrare:

- una dashboard SaaS blu
- una app scolastica generica
- una UI pastel
- una app startup standard

### 14.2 Palette primaria

- background app: `#0A0A0A`
- surface 1: `#101010`
- surface 2: `#161616`
- surface 3: `#1D1D1D`
- brand red: `#B01010`
- brand red dark: `#A01000`
- brand red deep: `#8E0E0E`
- text primary: `#F0F0F0`
- text secondary: `#D6D6D6`
- text muted: `#A6A6A6`
- accent ivory: `#F0E0C0`
- accent cream: `#F0E0D0`

### 14.3 Tipografia

Direzione consigliata:

- display / titoli: **Bebas Neue**
- testo UI: **Inter**

Uso:

- titoli sezione: Bebas Neue
- card title: Bebas Neue o equivalente display coerente
- body, label, meta, form, tabelle: Inter

### 14.4 Card system

- dark card
- bordo leggero
- ombre molto sobrie
- radius 16
- spaziatura ampia

### 14.5 Motion

- fade
- slight lift
- transizioni precise
- niente bounce giocoso

### 14.6 Mockup UI ufficiali da seguire

I due mockup allegati diventano riferimento visivo ufficiale per questa app:

- [ChatGPT Image May 11, 2026, 02_03_47 PM.png](</C:/Users/user/Downloads/ChatGPT Image May 11, 2026, 02_03_47 PM.png>)
- [swift prof.png](</C:/Users/user/Downloads/swift prof.png>)

#### Mockup 1: lista / dashboard docenti

Elementi da preservare:

- fondo nero pieno
- titolo grande rosso `Studio Cinema`
- stat cards compatte nella parte alta
- campo ricerca + filtro nella stessa fascia
- lista a righe dark con avatar a sinistra
- badge outline rosso a destra
- navigation chrome minima

#### Mockup 2: scheda valutazione studente

Elementi da preservare:

- profilo studente centrato in alto
- nome molto leggibile
- contesto classe/corso sotto il nome
- blocco presenza molto visibile
- selezione voto circolare orizzontale
- feedback rapido tramite chip
- pulsante `Salva e Chiudi` full width

#### Regola di traduzione

I mockup non vanno copiati in modo letterale come poster statici.
Vanno tradotti in SwiftUI mantenendo:

- stessa atmosfera
- stessa gerarchia visiva
- stessa sobrietà dark/red
- stessa logica di densita' e spacing

ma con comportamento nativo iPad.

---

## 15. Regole UI specifiche per iPad

### 15.1 Layout

- usare bene lo spazio orizzontale
- evitare interfaccia pensata come iPhone allargato
- sidebar persistente
- dettaglio sempre leggibile
- usare il mockup 1 come direzione stilistica, non come vincolo di layout identico
- se serve, sostituire la bottom tab bar del mockup con sidebar sinistra piu' adatta a iPad

### 15.2 Densita'

- informazioni compatte ma respirate
- niente card giganti inutili
- niente liste troppo compresse

### 15.3 Interazioni

- target touch ampi
- selezione chiara
- stato attivo ben visibile con rosso brand

### 15.4 Struttura raccomandata reale su iPad

Traduzione consigliata dei mockup:

1. Sidebar sinistra
2. Content pane centrale con elenco lezioni o studenti
3. Detail pane destro con scheda studente o form valutazione

Se il team preferisce una versione piu' semplice:

1. Lista principale full height
2. Tocco su studente
3. Apertura di sheet o inspector laterale con UI simile al mockup 2

### 15.5 Regole estetiche puntuali

- niente blur eccessivo
- niente vetro luminoso stile consumer app
- bordi sottili e chiari, non spessi
- rosso usato per CTA, selezione, badge e stato attivo
- verde e giallo ammessi solo per presenza e stati semantici
- testo sempre ad alto contrasto
- immagini profilo circolari o soft-rounded, mai decorative inutilmente

### 15.6 Regole sul form valutazione

Il mockup 2 definisce il tono giusto del form.

Quindi il form finale deve avere:

- header con volto studente
- presenza prima del voto
- voto prima del feedback rapido
- feedback rapido prima di eventuali note lunghe
- CTA finale bloccata in basso o chiaramente separata dal contenuto

Da evitare:

- form lunghi e burocratici
- campi testuali predominanti
- sezioni collapse confuse
- modali troppo piccole
- look da form amministrativo grigio standard

---

## 16. Componenti SwiftUI da costruire

### Design system components

- `SCAppShell`
- `SCSidebar`
- `SCSectionHeader`
- `SCCourseCard`
- `SCClassCard`
- `SCLessonRow`
- `SCStudentTile`
- `SCStudentDetailPanel`
- `SCScoreInput`
- `SCEvaluationForm`
- `SCPrimaryButton`
- `SCSecondaryButton`
- `SCEmptyState`
- `SCErrorState`
- `SCSearchField`

### Requisito

Tutti questi componenti devono dipendere da token di design centralizzati e non da colori hardcoded sparsi.

---

## 17. Struttura file consigliata

```text
StudioCinemaTeacherIPad/
├─ App/
├─ Core/
│  ├─ Config/
│  ├─ Routing/
│  ├─ Extensions/
│  └─ Theme/
├─ Models/
├─ Services/
│  ├─ Supabase/
│  ├─ Repositories/
│  └─ Publishers/
├─ Features/
│  ├─ Auth/
│  ├─ Courses/
│  ├─ Classes/
│  ├─ Lessons/
│  ├─ Students/
│  └─ Evaluations/
├─ DesignSystem/
│  ├─ Components/
│  ├─ Tokens/
│  └─ Modifiers/
└─ Resources/
```

---

## 18. Model layer consigliato

Il coder puo' leggere e mappare i modelli esistenti in versioni specifiche per l'app docenti.

### Esempi

- `TeacherCourseSummary`
- `TeacherClassSummary`
- `TeacherLessonSummary`
- `TeacherStudentSummary`
- `TeacherEvaluationDraft`
- `TeacherEvaluationPayload`

### Regola

I model UI non devono dipendere direttamente dalla forma raw di Supabase se questo rende il codice fragile.

---

## 19. Service layer consigliato

### Read-only services

- `TeacherPortalReadService`
- `TeacherCourseRepository`
- `TeacherLessonRepository`
- `TeacherStudentRepository`

### Publish abstraction

- `EvaluationPublishing`
- `DisabledEvaluationPublisher`
- `RemoteEvaluationPublisher`

### Regola

Separare sempre:

- fetch dati esistenti
- composizione view models
- invio valutazione

---

## 20. Permessi e sicurezza

### 20.1 Minimo indispensabile

L'app deve esporre solo i dati utili al docente autenticato.

### 20.2 Mai assumere permessi lato client

Il client non puo' decidere da solo che un docente puo' vedere o inviare su qualunque lezione.

### 20.3 Se manca una relazione esplicita

Se dal dato esistente non e' chiaro il mapping docente -> corso/classe/lezione:

- non inventarlo
- non fare fallback pericolosi
- fermarsi e documentare il gap

---

## 21. Non-goals espliciti

Questa prima specifica non richiede:

- modifiche CRM
- backoffice web
- bulk edit massivo di database
- editing studenti
- editing corsi
- editing lezioni
- gestione amministrativa completa

Lo scopo e':

- consultazione controllata
- flusso valutazione pronto
- app iPad elegante e stabile

---

## 22. Strategia di rollout raccomandata

### Fase 1

- login
- corsi
- classi
- lezioni
- roster studenti
- UI valutazione in locale

### Fase 2

- payload valutazione definito
- publisher remoto simulato in staging

### Fase 3

- endpoint server-side approvato
- invio reale
- sync student app / CRM

### Regola

Non saltare direttamente alla Fase 3 senza aver validato la sicurezza del write path.

---

## 23. Checklist obbligatoria prima di ogni merge

Il coder deve verificare:

- nessuna tabella esistente e' stata modificata
- nessuna query scrive su tabelle legacy
- nessun hack usa `attendances.notes` come storage valutazione finale
- nessuna RLS e' stata toccata
- nessun trigger e' stato modificato
- l'app funziona bene in sola lettura
- UI coerente col brand
- app usabile su iPad in landscape
- stato empty/error/loading gestito

---

## 24. Testing richiesto

### Test funzionali

- login docente
- caricamento corsi
- caricamento classi
- caricamento lezioni
- caricamento roster studenti
- apertura form valutazione
- salvataggio draft locale

### Test di sicurezza

- assenza totale di scritture verso tabelle legacy
- verificare che nessuna azione UI faccia `update` o `insert` non autorizzati

### Test UI

- iPad 11"
- iPad 13"
- split view
- light conditions basse: contrasto sempre leggibile

---

## 25. Regole di coding

Il coder deve:

- non indovinare campi o join
- verificare ogni tabella letta
- tenere servizi piccoli e testabili
- non mischiare UI, fetch e business logic
- usare nomi chiari
- usare commenti solo dove servono davvero
- evitare refactor non richiesti sul codice esistente

---

## 26. Regole di consegna

Ogni consegna del coder deve includere:

- cosa e' stato implementato
- quali query vengono usate
- conferma esplicita che sono solo read-only
- eventuali gap di backend
- eventuali punti che richiedono approvazione prima di abilitare la publish reale

---

## 27. Decisione finale raccomandata

### Cosa penso

Si', la farei su iPad.

E la farei:

- nativa
- in SwiftUI
- brand Studio Cinema
- con architettura read-first
- con publish isolato
- con divieto assoluto di toccare le tabelle Supabase esistenti

### Motivo

E' la soluzione piu' sicura per:

- non rompere il CRM
- non contaminare il database attuale
- preparare bene la fase successiva di pubblicazione valutazioni reali
- dare ai docenti uno strumento professionale e molto piu' comodo di una UI improvvisata

---

## 28. Brief finale da seguire alla lettera

**Costruire una app iPad SwiftUI per docenti Studio Cinema, coerente col brand cinematico dark/red del sistema Studio Cinema, che legga in sicurezza i dati esistenti da Supabase senza modificare nessuna tabella, nessuna policy, nessun trigger e nessuna struttura legacy del CRM. Qualunque futura pubblicazione di valutazioni dovra' avvenire solo tramite un layer nuovo, isolato e server-side, mai tramite scritture dirette client sulle tabelle esistenti.**

---

## 29. Lista Super Operativa Per Il Coder Xcode

## ATTENZIONE ASSOLUTA - DA LEGGERE PRIMA DI INIZIARE

### Blocco non negoziabile

**NON TOCCARE SUPABASE. NON TOCCARE IL DB ESISTENTE. NON MODIFICARE NESSUN DATO, NESSUNA TABELLA, NESSUNA POLICY, NESSUN TRIGGER, NESSUNA VIEW, NESSUNA FUNZIONE SQL.**

### Traduzione pratica

Prima di scrivere codice, il coder deve assumere che:

- il CRM esistente e' fragile rispetto a cambi non controllati
- il database corrente va trattato come read-only
- ogni tabella esistente serve solo come fonte dati
- nessuna scrittura client-side e' autorizzata sui dati gia' esistenti

### In sintesi

Consentito:

- leggere
- mappare
- filtrare
- presentare
- simulare il submit

Vietato:

- creare patch al database esistente
- fare test scrivendo dati veri
- usare campi legacy per nuovi scopi
- cambiare il comportamento del sistema attuale

---

## 30. Sequenza operativa esatta

Il coder deve lavorare in questo ordine, senza saltare i passaggi.

### STEP 0 - Leggere il brief completo

Prima di fare qualsiasi cosa:

- leggere tutto questo documento
- leggere il brand UI system
- leggere eventuali file modello dell'app studente esistente
- non partire a implementare prima di aver capito i vincoli

Output atteso:

- mini nota scritta con conferma che il sistema sara' trattato read-only

### STEP 1 - Preparare il progetto iPad SwiftUI

Creare:

- nuovo progetto iPadOS SwiftUI
- struttura cartelle coerente
- theme base dark Studio Cinema
- design tokens centralizzati

Da fare:

- configurare `Theme`
- configurare colori
- configurare font
- configurare componenti base

Non fare ancora:

- query reali
- logica valutazioni finale
- scritture backend

### STEP 2 - Costruire il design system

Creare prima questi componenti:

- `SCPrimaryButton`
- `SCSecondaryButton`
- `SCStatCard`
- `SCSearchField`
- `SCFilterPill`
- `SCStudentRow`
- `SCAvatarView`
- `SCPresenceSelector`
- `SCScoreSelector`
- `SCQuickFeedbackChip`
- `SCScreenContainer`

Obiettivo:

- replicare il tono dei mockup
- evitare hardcoded sparsi
- avere UI coerente prima del wiring dati

### STEP 3 - Costruire le schermate statiche

Prima in mock locale, senza backend:

- login
- dashboard/lista docenti-corsi
- lista studenti
- scheda valutazione

Obiettivo:

- validare layout iPad
- validare gerarchia visiva
- validare usabilita'

### STEP 4 - Definire i modelli locali

Creare i model di app:

- `TeacherCourseSummary`
- `TeacherClassSummary`
- `TeacherLessonSummary`
- `TeacherStudentSummary`
- `TeacherEvaluationDraft`
- `TeacherEvaluationPayload`

Regola:

- separare modelli UI da modelli raw Supabase

### STEP 5 - Costruire solo il read layer

Creare:

- `TeacherPortalReadService`
- `TeacherCourseRepository`
- `TeacherClassRepository`
- `TeacherLessonRepository`
- `TeacherStudentRepository`

Ogni repository deve:

- leggere dati esistenti
- non scrivere nulla
- non tentare workaround

### STEP 6 - Collegare il flusso di navigazione reale

Flusso obbligatorio:

1. login
2. corsi
3. classi
4. lezioni
5. roster studenti
6. dettaglio studente
7. apertura form valutazione

Il coder deve privilegiare:

- rapidita'
- pochi tap
- chiarezza di contesto

### STEP 7 - Costruire il form valutazione in locale

Il form deve salvare solo uno stato locale o draft temporaneo.

Campi minimi:

- presenza
- voto
- feedback rapido
- note studente
- note private locali

Per ora il bottone finale:

- non deve scrivere su Supabase legacy
- non deve toccare CRM

### STEP 8 - Inserire il publisher astratto

Implementare:

```swift
protocol EvaluationPublishing {
    func publish(_ payload: TeacherEvaluationPayload) async throws
}
```

Prima implementazione:

- `DisabledEvaluationPublisher`

Comportamento:

- mostra messaggio chiaro
- conferma che il flusso reale di submit non e' ancora abilitato

### STEP 9 - Rifinitura UI

Controllare:

- spaziature
- pesi tipografici
- contrasto
- badge
- pulsanti
- comportamento del form su iPad 11 e 13 pollici

### STEP 10 - Audit finale anti-rischio

Prima di considerare finita la milestone, verificare esplicitamente:

- zero query di scrittura su tabelle esistenti
- zero workaround su `attendances.notes`
- zero tentativi di alterare schema
- zero ipotesi arbitrarie su join non confermate

---

## 31. Milestone operative

### Milestone 1 - Shell e UI base

Consegna attesa:

- progetto avviabile
- tema Studio Cinema
- dashboard mock
- student list mock
- evaluation sheet mock

### Milestone 2 - Read-only data layer

Consegna attesa:

- servizi read-only
- fetch corsi/classi/lezioni/studenti
- schermate collegate a dati veri in sola lettura

### Milestone 3 - Evaluation local flow

Consegna attesa:

- form valutazione funzionante localmente
- draft locale
- publisher disabilitato o simulato

### Milestone 4 - Hardening

Consegna attesa:

- loading states
- empty states
- error states
- ottimizzazione iPad
- verifica anti-regressione rispetto ai vincoli DB

---

## 32. Deliverable richiesti al coder

Ogni consegna deve includere:

- codice
- nota di implementazione
- elenco schermate completate
- elenco query usate
- conferma esplicita: `solo read-only sulle tabelle esistenti`
- eventuali dubbi o gap backend

Formato consigliato della nota:

1. Cosa e' stato fatto
2. Quali dati vengono letti
3. Quali punti restano mock o locali
4. Conferma che nessuna scrittura su Supabase legacy e' stata introdotta

---

## 33. Regole rigide per ogni PR o consegna

Prima di chiudere una PR, il coder deve poter dire con certezza:

- `Non ho modificato Supabase`
- `Non ho modificato il database esistente`
- `Non ho scritto sulle tabelle legacy`
- `Non ho usato hack sui campi esistenti`
- `Ho costruito l'app in modalita' safe read-first`

Se anche una sola di queste frasi non e' vera, la consegna non va approvata.

---

## 34. Prompt operativo corto per il coder

Usa questo come istruzione sintetica iniziale:

**Costruisci la nuova app iPad SwiftUI per docenti Studio Cinema seguendo i mockup allegati e il brand dark/red cinematico. Tratta tutto il backend Supabase esistente come read-only assoluto: non modificare tabelle, dati, policy, trigger, view o funzioni SQL. Leggi soltanto i dati necessari per corsi, classi, lezioni e studenti. Il flusso valutazione va costruito in UI e logica locale, con publisher astratto disabilitato o simulato, senza alcuna scrittura sulle strutture legacy del CRM.**
