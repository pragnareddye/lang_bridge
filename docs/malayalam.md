# Malayalam

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

### [Try it Online Now!](https://sai.onl/lang_bridge/try/index.html#malayalam)

## JS Examples

### Hello

```javascript
para("Hello World");
```


### Variables

```javascript
orma name = "Sai"

// print to screen
para(name)
```


### For Loop

```javascript
orma names = ["Sai", "Pragna", "Etikyala"]

// print each name to screen
lup(name in names) {
  para(name)
}
```


### If-Else

```javascript
orma name = "Pragna"

athava (name === "Pragna") {
  para("Hi Pragna!");
} allenkil {
  para("I don't know a " + name);
}
```


### Function

```javascript
joli greet(name) {
  para("Hello " + name);
}

greet("Pragna");
```


### While

```javascript
orma count_down = 3;

athavumbo(count_down>0) {
  para(count_down--);
}
```


### Prime Number

```javascript
orma max_number_checked = 2;
orma prime_numbers = [2];

joli is_prime(num) {
  athava (max_number_checked >= num) {
    ayaki prime_numbers.includes(num);
  }
  athavumbo (++max_number_checked <= num) {
    orma prime = true;
    orma x;
    lup (x of prime_numbers) {
      athava (max_number_checked % x == 0) {
        prime = false;
        nikki;
      }
    }
    athava (prime) {
      prime_numbers.push(max_number_checked);
    }
  }
  ayaki prime_numbers.includes(num);
}

para(is_prime(23));
```

