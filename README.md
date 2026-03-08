# Cloud ToDo Application

Chmurowa aplikacja mobilna do zarządzania zadaniami z mechanizmem backupu i disaster recovery.

## Technologie

- Flutter
- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Functions
- Google Cloud Storage
- Docker

## Funkcje

- rejestracja użytkownika
- logowanie
- dodawanie zadań
- oznaczanie zadań jako wykonane
- synchronizacja danych
- automatyczny backup danych

## Architektura

System oparty jest na Backend-as-a-Service wykorzystującym Firebase.

## CI/CD

Pipeline obejmuje:

- build aplikacji
- testy
- analizę kodu
- deployment do Firebase
