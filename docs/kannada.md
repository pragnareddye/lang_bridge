# Kannada

[Try it Online Now!](https://sai.onl/lang_bridge/try#kannada)

## JS Examples

### Hello

```javascript
helu("Hello World");
```

### Variables

```javascript
nenapu name = "Sai"

// print to screen
helu(name)
```

### For Loop

```javascript
nenapu names = ["Sai", "Pragna", "Etikyala"]

// print each name to screen
lup(name in names) {
  helu(name)
}
```

### If-Else

```javascript
nenapu name = "Pragna"

nijavidre (name === "Pragna") {
  helu("Hi Pragna!");
} athava {
  helu("I don't know a " + name);
}
```

### Function

```javascript
kelsa greet(name) {
  helu("Hello " + name);
}

greet("Pragna");
```

### While

```javascript
nenapu count_down = 3;

nijvaga(count_down>0) {
  helu(count_down--);
}
```

### Prime Number

```javascript
nenapu max_number_checked = 2;
nenapu prime_numbers = [2];

kelsa is_prime(num) {
  nijavidre (max_number_checked >= num) {
    kodu prime_numbers.includes(num);
  }
  nijvaga (++max_number_checked <= num) {
    nenapu prime = true;
    nenapu x;
    lup (x of prime_numbers) {
      nijavidre (max_number_checked % x == 0) {
        prime = false;
        nilisu;
      }
    }
    nijavidre (prime) {
      prime_numbers.push(max_number_checked);
    }
  }
  kodu prime_numbers.includes(num);
}

helu(is_prime(23));
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

`madu`: do

`nenapu`: var

`khali`: null

`kelsa`: function

`lup`: for

`kelu`: input