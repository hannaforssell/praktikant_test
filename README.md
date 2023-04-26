# Test för praktikanter

## Gör så här:
- Gör en **fork** av repot.
- När du gjort din fork så kan du använda den som ditt repo.
- Start localhost med kommandot *yarn dev*.
- Gör en uppgift och commita sedan din lösning.
    - Så commit _1_ blir uppgift 1, commit _2_ blir uppgift 2 osv.
    - Du kan namnge commitsen till **Uppgift 1, 2** etc...
- När du är klar så skicka in en länk till den fork du skapat.

> Du får lösa uppgifterna på vilket sätt du vill, så länge resultatet följer det som står i uppgiften. Du måste heller inte göra **bonusuppgiften** om du inte vill.

### Uppgift 1:
När du klickar på boxen så byter den färg till röd. Gör så att ytterligare en box ritas ut. Den nya boxen ska byta till valfri färg när man klickar på den. Dess initiala färg är också valfri. Den nya boxen ska ligga till vänster om den gamla.

### Uppgift 2:
Rita ut ytterligare en box enligt samma princip, med valfria färger. Gör så att boxarna nu ritas vertikalt istället för horisontellt. Ordningen på hur de ritas ut spelar ingen roll.

### Uppgift 3:
Lägg nu till en prop till komponenten `Box.tsx` som gör att man kan lägga till valfri text inuti boxen (`div`) som finns i den komponenten. Man ska dock kunna rendera en `Box.tsx` utan att **behöva** använda den nya propen.

### Uppgift 4:
Ändra till valfri färg på texten som renderas i boxen och gör så att texten placeras i mitten.

### Uppgift 5:
Det finns ytterligare en komponent i `src/components/text.tsx`. Du kan byta mellan de två komponenterna med hjälp av knapparna uppe i vänstra hörnet. Gör om denna komponent till en funktionell komponent. All ursprunglig funktionalitet i komponenten ska vara kvar när du gjort om den till en funktionell komponent.

### Bonus
Gör så att när man klickar på en knapp så renderas det mellan 10 - 20 boxar, så det ska inte kunna bli mindre än 10 och inte mer än 20 boxar. Alla boxar ska få olika färger. Du kan också fixa så att:
- Alla props förutom *color* är optional.
- Inget händer längre om man klickar på en box.

Boxarna ska renderas under knappen och texten (**Test**).
#### Se bilden nedan för hur det ska se ut

![alt text](https://github.com/JesperCaspeco/praktikant_test/blob/main/src/misc/praktikantTest.gif)
