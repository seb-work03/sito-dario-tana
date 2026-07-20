@AGENTS.md

# Workflow Git obbligatorio

Questa repository viene sviluppata direttamente sul branch main.

Ogni volta che una richiesta dell'utente comporta modifiche al progetto:

1. verifica che il branch corrente sia main;
2. esegui git pull --ff-only origin main prima di iniziare;
3. se il pull non può essere completato, fermati;
4. completa tutte le modifiche richieste;
5. controlla git status e git diff;
6. esegui i controlli disponibili:
   - npm run lint;
   - npm run typecheck;
   - npm run build;
   - oppure npm run check quando disponibile;
7. correggi gli errori provocati dalle modifiche;
8. aggiungi al commit soltanto i file pertinenti alla richiesta;
9. non aggiungere file .env, credenziali, token, password, file temporanei o segreti;
10. crea un commit con un messaggio chiaro e descrittivo;
11. esegui automaticamente git push origin main;
12. conferma sempre hash del commit e risultato del push.

Il commit e il push devono avvenire dopo ogni richiesta completata che abbia prodotto modifiche.

Non eseguire push intermedi mentre il lavoro è incompleto.

Se build, typecheck o lint falliscono per problemi introdotti dalle modifiche, non eseguire il push finché non sono stati risolti.

Regole di sicurezza:

- non creare branch alternativi senza richiesta;
- non eseguire mai git push --force;
- non eseguire mai git reset --hard;
- non eseguire git clean -fd;
- non riscrivere la cronologia Git;
- non usare commit --amend su commit già pubblicati;
- non eliminare il remote origin;
- non modificare direttamente database di produzione;
- non eseguire migrazioni di produzione;
- non eseguire deploy manuali senza richiesta;
- non includere node_modules nei commit;
- non leggere o mostrare file .env.
