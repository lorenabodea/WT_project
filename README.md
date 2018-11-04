# Documentație proiect

## Introducere

### Principala nevoie/problemă pe care o rezolvă produsul 

Cum deadline-urile sunt extrem de importante in activitatea noastra zilnica, planificarea eficienta a activitatilor este un subiect de interes pentru majoritatea persoanelor in ziua de astazi. Fie ca vorbim despre planificarea activitatilor unui student (seminarii, cursuri, proiecte, teme, examene), fie ca vorbim de cea a unui angajat (meeting-uri, task-uri la locul de munca, etc), organizarea eficienta a programului este la fel de importanta. Astfel, consideram ca **planificarea eficienta si corecta a activitatilor** reprezinta o nevoie actual pe care produsul nostrum o poate rezolva.

### Cărui tip de utilizatori se adresează

Aplicatia va fi destinata uricarui tip de utilizator care are cunostinte medii de folosire a tehnologiei. Pentru a acoperi o arie cat mai mare de utilizatori vom incerca sa construim o pagina cat mai user friendly si sugestiva. Cu toate astea, vom avea si un main target, anume persoanele care sunt  foarte ocupate. Ar fi ideal sa putem colabora cu companii pentru a facilita planificarea activitatilor zilnice ale angajatilor de la birou (meetings-uri, stand-ups, etc).


### Produse similare existente pe piață 

1.	**Appointlet**
- Pot fi create booking page-uri cu disponibilitatea utilzatorului, putand fi distribuita cu clienti, colegi, etc.  
- Sincronizarea cu Google Calendar si Office 365 Calendar 
2.	**Calendly**
- Aplicatie web integrate cu Google Calendar, iCal, Outlook si Office 365
- Utilizata pentru programarea appointment-urilor
- Se pot trimite reminder-uri
3.	**GigaBook**
- Programarea appointment-urilor in cele mai mici detalii, utlizata in special in domeniul business
- Se pot realiza to-do lists, precum si progama plati ale unor facturi, oferind unele feature-uri unice in ceea ce priveste partea de project management
4.	**Launch27**
- Utilizata tot in domeniul business, venind cu solutii eficiente in ceea ce priveste programarea appointment-urilor cu clientii
- Contine diverse tool-uri si pentru programarea task-urilor realizate impreuna cu echipa, monitorizand progresul atat individual cat si al echipei
5.	**MyTime**
- Dashboardul ofera o viziune ampla asupra appointment-urilor programate, avand o interfata user-friendly
- Este utila  si in marketing, putand fi utilizata in gestionarea campaniilor promotionale cu clientii existenti

Alte produse similare existente pe piata: Setmore, SimplyBook, Square Appointments, vCita, YouCanBook.me.

## API REST

get/appointments =>returns a list with all the upcoming events  
get/appointments/:day => returns a list of appointments from a specific day in the current month  
get/appointments/:month => returns the events from a specific month in the current year  
get/appointments/:label =? returns all the appointments that have a specific label
post/appointments => creates an event
put/appointments => edit an event
post/label => creates a label (appointments will be cathegorized by labels)
put/label => edit label 
GET/appointments?search={name}&orderBy={orderByName}


### Examples:  
 request: get/appointments/5  
 response: [{  
   "name": "Fitness class",  
   "date": "11/5/2018",  
   "start_hour": "14:00"  
   "end_hour":"14:30"  
   "label": "health",  
   "type": "0"  
   },  
   {
     "name": "Dentist",  
     "date": "11/5/2018",   
      "start_hour": "15:00"  
      "end_hour":"16:30"  
     "label": "health",  
     "type":"0"  
     },  
     {  
       "name": "Meeting with products manager",  
       "date": "11/5/2018",  
        "start_hour": "13:00"  
        "end_hour":"14:30"  
       "label": "office",  
       "type":"1"  
       },  

   ]
  
   request: get/labels/office  
   response: ["health", "office", "free_time"]  

   request: get/appointments/Office  
   response: [{  
     "name": "Stand-up",  
     "date": "11/2/2018",  
      "start_hour": "14:00"  
       "end_hour":"14:30"  
     "label": "office",  
     "type": "1"  
     },  
     {  
       "name": "Meeting with Dave",  
       "date": "11/3/2018",   
       "label": "office",   
        "start_hour": "14:00"  
        "end_hour":"14:30"  
       "type":"1"  
       },  
       {
         "name": "Meeting with products manager",  
         "date": "11/5/2018",  
          "start_hour": "14:00"  
          "end_hour":"14:30"  
         "label": "office",  
         "type":"1"  
         },  
  
     ]  

![VD](https://drive.google.com/drive/u/0/my-drive)

