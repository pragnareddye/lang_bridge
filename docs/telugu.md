# Telugu

`ayite`: if

`mari`: else

`unnapudu`: while

`cheppu`: print

`tirigi`: return

`aapu`: break

`konasagincu`: continue

`nijam`: true

`tappu`: false

`cheyyu`: do

`nilva`: var

`khali`: null

`pani`: function

`kosam`: for

`adagu`: input

### [Try it Online Now!](https://sai.onl/lang_bridge/try/index.html#telugu)

## JS Examples

### Hello

```javascript
cheppu("Hello World");
```


### Variables

```javascript
nilva name = "Sai"

// print to screen
cheppu(name)
```


### For Loop

```javascript
nilva names = ["Sai", "Pragna", "Etikyala"]

// print each name to screen
kosam(name in names) {
  cheppu(name)
}
```


### If-Else

```javascript
nilva name = "Pragna"

ayite (name === "Pragna") {
  cheppu("Hi Pragna!");
} mari {
  cheppu("I don't know a " + name);
}
```


### Function

```javascript
pani greet(name) {
  cheppu("Hello " + name);
}

greet("Pragna");
```


### While

```javascript
nilva count_down = 3;

unnapudu(count_down>0) {
  cheppu(count_down--);
}
```


### Prime Number

```javascript
nilva max_number_checked = 2;
nilva prime_numbers = [2];

pani is_prime(num) {
  ayite (max_number_checked >= num) {
    tirigi prime_numbers.includes(num);
  }
  unnapudu (++max_number_checked <= num) {
    nilva prime = true;
    nilva x;
    kosam (x of prime_numbers) {
      ayite (max_number_checked % x == 0) {
        prime = false;
        aapu;
      }
    }
    ayite (prime) {
      prime_numbers.push(max_number_checked);
    }
  }
  tirigi prime_numbers.includes(num);
}

cheppu(is_prime(23));
```

