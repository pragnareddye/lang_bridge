'lang sweet.js';

// null
export syntax farigh = ctx => #`null`

// true
export syntax sahih = ctx => #`true`

// false
export syntax khata = ctx => #`false`

// var
export syntax hayz = ctx => #`var`

// while
export syntax eindama = ctx => #`while`

// console.log
export syntax yaqul = ctx => #`console.log ${ctx.next().value}`

// prompt (only works on browser right now)
export syntax bisal = ctx => #`prompt ${ctx.next().value}`

// function
export syntax eamil = ctx => #`function`

// for and foreach loop
export syntax iilaa = ctx => #`for`

// return
export syntax yueti = ctx => #`return ${ctx.next().value}`

// break
export syntax nilisu = ctx => #`break`;

// async
export syntax ghayr_mutazamin = ctx => #`async`;

// await
export syntax antazir = ctx => #`await`;

// new
export syntax jadid = ctx => #`new`;

// promise
export syntax Yueadu = ctx => #`Promise`;

// exec_after
export syntax alqiam_baed = ctx => #`setTimeout`;

// if
export syntax sahihun = ctx => {
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
    if (possible_else_or_elseif.value.value.token.value === "akhar") {
      if (possible_if_or_else_block.value.value && possible_if_or_else_block.value.value.token.value === "sahihun") {
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
export syntax yafeal = ctx => {
  let do_block = ctx.next().value;
  let while_keyword = ctx.next().value;
  if(while_keyword && while_keyword.value.token.value === "eindama") {
    return #`do ${do_block} while ${ctx.next().value}`;
  }
}