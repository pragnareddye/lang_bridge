# Kannada

[Try it Online Now!](https://sai.onl/lang_bridge/try#kannada)

## JS Examples

### Hello

```javascript
helu('ಹಲೋ ವರ್ಲ್ಡ್!');
```

### Variables

```javascript
nenapu hesaru = "Sai"

helu(hesaru);
```

### For Loop

```javascript
nenapu hesarugalu = ["Sai", "Pragna", "Etikyala"];

lup(hesaru in hesarugalu) {
  helu(hesaru);
}
```

### If-Else

```javascript
nenapu hesaru = "Pragna"

nijavidre (hesaru === "Pragna") {
  helu('ಹಲೋ ' + hesaru + '!');
} athava {
  helu('ನನಗೆ ' + hesaru + ' ಗೊತ್ತಿಲ್ಲ');
}
```

### Function

```javascript
kelsa namaskara(hesaru) {
  helu('ಹಲೋ ' + hesaru + '!');
}

namaskara("Pragna");
```

### While

```javascript
nenapu enike = 3;

nijvaga(enike>0) {
  helu(enike--);
}
```

### Async-Await

```javascript
asamakalika kelsa talmeyannu_parikshisi() {
  nenapu bharavase = hosa Bharavase(
    (pariharisalu, tiraskarisi) => {
      nantara_maadi(
        () => pariharisalu(
          'ನಾನು 2 ಸೆಕೆಂಡುಗಳ ಕಾಲ ತಾಳ್ಮೆಯಿಂದಿದ್ದೇನೆ!'),
        2000)
  });

  nenapu uttara = nirikshisi bharavase;

  helu(uttara);
}

talmeyannu_parikshisi();
```

### First to Three Wins

```javascript
kelsa padeyiri_vijeta(ankagalu) {
  nenapu hesaru;
  lup (hesaru in ankagalu) {
    nijavidre (ankagalu[hesaru] >= 3) {
      kodu hesaru;
    }
  }
  kodu khali;
}


nenapu ankagalu = {'ABC': 3, 'DEF': 1, 'GHI': 2};

nenapu vijeta = padeyiri_vijeta(ankagalu);
nijavidre (vijeta === khali) {
  helu('ಇನ್ನೂ ವಿಜೇತರಾಗಿಲ್ಲ ಎಂದು ತೋರುತ್ತಿದೆ!');
} athava {
  helu('ವಿಜೇತರು ' + vijeta);
}
```


## Keywords

`nijavidre`: if

`athava`: else

`nijvaga`: while

`helu`: print

`kodu`: return

`nilisu`: break

`muduvarisi`: continue

`sari`: true

`thapu`: false

`maadu`: do

`nenapu`: var

`khali`: null

`kelsa`: function

`lup`: for

`kelu`: input