'lang sweet.js';

// null
export syntax khali = ctx => #`null`

// true
export syntax sari = ctx => #`true`

// false
export syntax thapu = ctx => #`false`

// var
export syntax nenapu = ctx => #`var`

// while
export syntax nijvaga = ctx => #`while`

// console.log
export syntax helu = ctx => #`console.log ${ctx.next().value}`

// prompt (only works on browser right now)
export syntax kelu = ctx => #`prompt ${ctx.next().value}`

// function
export syntax kelsa = ctx => #`function`

// for and foreach loop
export syntax lup = ctx => #`for`

// return
export syntax kodu = ctx => #`return ${ctx.next().value}`

// break
export syntax nilisu = ctx => #`break`;

// async
export syntax asamakalika = ctx => #`async`;

// await
export syntax nirikshisi = ctx => #`await`;

// new
export syntax hosa = ctx => #`new`;

// promise
export syntax Bharavase = ctx => #`Promise`;

// exec_after
export syntax nantara_maadi = ctx => #`setTimeout`;

// if
export syntax nijavidre = ctx => {
  var readIf = true;
  var count = 2;
  var result = #`if ${ctx.next().value} ${ctx.next().value} `;
  while(readIf) {
    readIf = false;
    var possible_else_or_elseif = ctx.next()
    var possible_if_or_else_block = ctx.next()
      
    if (!possible_else_or_elseif || !possible_else_or_elseif.value || 
        !possible_else_or_elseif.value.value || !possible_if_or_else_block) {
      break;
    }
    if (possible_else_or_elseif.value.value.token.value === "athava") {
      if (possible_if_or_else_block.value.value && possible_if_or_else_block.value.value.token.value === "nijavidre") {
        count +=4
        result = result.concat(#`else if ${ctx.next().value} ${ctx.next().value} `);
        readIf = true;
      } else {
        count+=2;
        result = result.concat(#`else ${possible_if_or_else_block.value} `);
      }
    } 
  }
  ctx.reset();
  while (--count >= 0) ctx.next();
  return result;
}

//do while
export syntax maadu = ctx => {
  let do_block = ctx.next().value;
  let while_keyword = ctx.next().value;
  if(while_keyword && while_keyword.value.token.value === "nijvaga") {
    return #`do ${do_block} while ${ctx.next().value}`;
  }
}