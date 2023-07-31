# Arabic

[Try it Online Now!](https://sai.onl/lang_bridge/try#arabic)

## JS Examples

### Hello

```javascript
yaqul("Hello World");
```

### Variables

```javascript
hayz name = "Sai"

// print to screen
yaqul(name)
```

### For Loop

```javascript
hayz names = ["Sai", "Pragna", "Etikyala"]

// print each name to screen
iilaa(name in names) {
  yaqul(name)
}
```

### If-Else

```javascript
hayz name = "Pragna"

sahihun (name === "Pragna") {
  yaqul("Hi Pragna!");
} akhar {
  yaqul("I don't know a " + name);
}
```

### Function

```javascript
eamil greet(name) {
  yaqul("Hello " + name);
}

greet("Pragna");
```

### While

```javascript
hayz count_down = 3;

eindama(count_down>0) {
  yaqul(count_down--);
}
```

### Prime Number

```javascript
hayz max_number_checked = 2;
hayz prime_numbers = [2];

eamil is_prime(num) {
  sahihun (max_number_checked >= num) {
    yueti prime_numbers.includes(num);
  }
  eindama (++max_number_checked <= num) {
    hayz prime = true;
    hayz x;
    iilaa (x of prime_numbers) {
      sahihun (max_number_checked % x == 0) {
        prime = false;
        nilisu;
      }
    }
    sahihun (prime) {
      prime_numbers.push(max_number_checked);
    }
  }
  yueti prime_numbers.includes(num);
}

yaqul(is_prime(23));
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