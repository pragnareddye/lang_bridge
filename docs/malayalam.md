# Malayalam

[Try it Online Now!](https://sai.onl/lang_bridge/try#malayalam)

## JS Examples

### Hello

```javascript
para('ഹലോ വേൾഡ്!');
```

### Variables

```javascript
orma peru = "Sai"

para(peru);
```

### For Loop

```javascript
orma perukal = ["Sai", "Pragna", "Etikyala"];

lup(peru in perukal) {
  para(peru);
}
```

### If-Else

```javascript
orma peru = "Pragna"

athava (peru === "Pragna") {
  para('ഹലോ ' + peru + '!');
} allenkil {
  para('എനിക്ക് ഒരു ' + peru + ' അറിയില്ല');
}
```

### Function

```javascript
joli vandanam(peru) {
  para('ഹലോ ' + peru + '!');
}

vandanam("Pragna");
```

### While

```javascript
orma yennam = 3;

athavumbo(yennam>0) {
  para(yennam--);
}
```

### First to Three Wins

```javascript
joli neduka_vijayi(scorukal) {
  orma peru;
  lup (peru in scorukal) {
    athava (scorukal[peru] >= 3) {
      ayaki peru;
    }
  }
  ayaki illatha;
}


orma scorukal = {'ABC': 3, 'DEF': 1, 'GHI': 2};

orma vijayi = neduka_vijayi(scorukal);
athava (vijayi === illatha) {
  para('ഇതുവരെ ഒരു വിജയി ഇല്ലെന്ന് തോന്നുന്നു!');
} allenkil {
  para('വിജയി ' + vijayi + ' ആണ്');
}
```


## Keywords

`athava`: if

`allenkil`: else

`athavumbo`: while

`para`: print

`ayaki`: return

`nikki`: break

`thudaruka`: continue

`shari`: true

`thettu`: false

`cheyyu`: do

`orma`: var

`illatha`: null

`joli`: function

`lup`: for

`chodiki`: input