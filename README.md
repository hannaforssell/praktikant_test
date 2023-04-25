# praktikant test

## Gör så här:
- Gör en **fork** av repot.
- Efter du gjort en fork så kan du använda den som ditt egna repo.
- Start localhost med *yarn dev*
- Gör en uppgift och sen commita din lösning.
    - Så commit _1_ blir uppgift 1, commit _2_ blir uppgift 2 osv
    - Du kan namnge commitsen till **Uppgift 1, 2** etc...
- När du är klar så skicka in länk till din fork/repo du skapa.

> Du får lösa uppgifterna på vilket sätt du vill, så länge resultat följer det som står i uppgiften. Du måste heller inte göra **bonus** uppgiften om du inte vill.

### Uppgift 1:
När du klickar på boxen så byter den färg till röd. Gör så att det renderas en till box fast denna ska byta till valfri färg när man klickar på den, dess initiala färg är också valfri. Den nya boxen ska även ligga till vänster om den gamla.

### Uppgift 2:
Rendera ännu en till box med samma princip, valfria färger. Gör så att boxarna nu renderas vertikalt istället för horisontellt. Ordningen på hur dem renderas spelar ingen roll.

### Uppgift 3:
Lägg nu till en prop till komponenten `Box.tsx` som gör att man kan lägga till valfri text inuti boxen (`div`) som finns i den komponenten. Man ska dock kunna rendera en `Box.tsx` utan att **behöva** använda den nya propen.

### Uppgift 4:
Ändra till valfri färg på texten som renderas i boxen och gör så att texten placeras i mitten.

### Uppgift 5:
Det finns en till komponent i `src/components/text.tsx`. Du kan byta mellan de två komponenterna med hjälp av knapparna uppe i vänstra hörnet. Gör om denna komponent till en funktionell komponent. All funktionalitet inom komponenten ska vara kvar när du gjort om den till en funktionell.

### Bonus
Gör så att när man klickar på en knapp så renderas det mellan 10 - 20 boxar, så det ska inte kunna bli mindre än 10 och inte mer än 20 boxar. Alla boxar ska få olika färger. Du kan också fixa så att:
- Alla props förutom *color* är optional.
- Inget händer längre om man klickar på en box.

Boxarna ska renderas under knappen och texten (**Praktikant test**).
#### Se gifen för hur det ska se ut

![alt text](https://github.com/JesperCaspeco/praktikant_test/blob/main/src/misc/praktikantTest.gif)
