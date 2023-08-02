# Telugu

[Try it Online Now!](https://sai.onl/lang_bridge/try#telugu)

## JS Examples

### Hello

```javascript
cheppu('హలో వరల్డ్!');
```

### Variables

```javascript
gurthunchuko peru = "Sai"

cheppu(peru);
```

### For Loop

```javascript
gurthunchuko perlu = ["Sai", "Pragna", "Etikyala"];

prathi(peru in perlu) {
  cheppu(peru);
}
```

### If-Else

```javascript
gurthunchuko peru = "Pragna"

okavela (peru === "Pragna") {
  cheppu('హలో ' + peru + '!');
} lekunte {
  cheppu('నాకు ' + peru + ' తెలియదు');
}
```

### Function

```javascript
pani swagatham(peru) {
  cheppu('హలో ' + peru + '!');
}

swagatham("Pragna");
```

### While

```javascript
gurthunchuko lekkimpu = 3;

unnapudu(lekkimpu>0) {
  cheppu(lekkimpu--);
}
```

### Async-Await

```javascript
samakalikarana pani sahanaanni_pariksincandi() {
  gurthunchuko vagdanam = kotta Vagdanam(
    (pariskarincandi, tiraskarincandi) => {
      amalu_tarvata(
        () => pariskarincandi(
          'నేను 2 సెకన్లు ఓపిక పట్టాను!'),
        2000)
  });

  gurthunchuko samadhanam = veci_undandi vagdanam;

  cheppu(samadhanam);
}

sahanaanni_pariksincandi();
```

### First to Three Wins

```javascript
pani evaru_gelicharu(markulu) {
  gurthunchuko peru;
  prathi (peru in markulu) {
    okavela (markulu[peru] >= 3) {
      pampinchu peru;
    }
  }
  pampinchu khaali;
}


gurthunchuko markulu = {'ABC': 3, 'DEF': 1, 'GHI': 2};

gurthunchuko vijeta = evaru_gelicharu(markulu);
okavela (vijeta === khaali) {
  cheppu('ఇంకా విజేత లేనట్లు కనిపిస్తోంది!');
} lekunte {
  cheppu('విజేత ' + vijeta);
}
```


## Keywords

`okavela`: if

`lekunte`: else

`unnapudu`: while

`cheppu`: print

`pampinchu`: return

`aapu`: break

`konasaginchu`: continue

`nijam`: true

`tappu`: false

`cheyyu`: do

`gurthunchuko`: var

`khaali`: null

`pani`: function

`prathi`: for

`adugu`: input