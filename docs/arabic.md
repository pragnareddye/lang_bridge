# Arabic

[Try it Online Now!](https://sai.onl/lang_bridge/try#arabic)

## JS Examples

### Hello

```javascript
yaqul('Hello World!');
```

### Variables

```javascript
hayz name = "Sai"

yaqul(name);
```

### For Loop

```javascript
hayz names = ["Sai", "Pragna", "Etikyala"];

iilaa(name in names) {
  yaqul(name);
}
```

### If-Else

```javascript
hayz name = "Pragna"

sahihun (name === "Pragna") {
  yaqul('Hello ' + name + '!');
} akhar {
  yaqul("I don't know a " + name);
}
```

### Function

```javascript
eamil greet(name) {
  yaqul('Hello ' + name + '!');
}

greet("Pragna");
```

### While

```javascript
hayz counter = 3;

eindama(counter>0) {
  yaqul(counter--);
}
```

### First to Three Wins

```javascript
eamil get_winner(scores) {
  hayz name;
  iilaa (name in scores) {
    sahihun (scores[name] >= 3) {
      yueti name;
    }
  }
  yueti farigh;
}


hayz scores = {'ABC': 3, 'DEF': 1, 'GHI': 2};

hayz winner = get_winner(scores);
sahihun (winner === farigh) {
  yaqul("Looks like there isn't a winner just yet!");
} akhar {
  yaqul('The winner is ' + winner);
}
```


## Keywords

`sahihun`: if

`akhar`: else

`eindama`: while

`yaqul`: print

`yueti`: return

`nilisu`: break

`wasal`: continue

`sahih`: true

`khata`: false

`yafeal`: do

`hayz`: var

`farigh`: null

`eamil`: function

`iilaa`: for

`bisal`: input