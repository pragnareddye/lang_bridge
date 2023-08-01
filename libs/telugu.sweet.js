'lang sweet.js';

// null
export syntax khaali = ctx => #`null`

// true
export syntax nijam = ctx => #`true`

// false
export syntax tappu = ctx => #`false`

// var
export syntax gurthunchuko = ctx => #`var`

// while
export syntax unnapudu = ctx => #`while`

// console.log
export syntax cheppu = ctx => #`console.log ${ctx.next().value}`

// prompt (only works on browser right now)
export syntax adugu = ctx => #`prompt ${ctx.next().value}`

// function
export syntax pani = ctx => #`function`

// for and foreach loop
export syntax prathi = ctx => #`for`

// return
export syntax pampinchu = ctx => #`return ${ctx.next().value}`

// break
export syntax aapu = ctx => #`break`;

// if
export syntax okavela = ctx => {
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
    if (possible_else_or_elseif.value.value.token.value === "lekunte") {
      if (possible_if_or_else_block.value.value && possible_if_or_else_block.value.value.token.value === "okavela") {
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
export syntax cheyyu = ctx => {
  let do_block = ctx.next().value;
  let while_keyword = ctx.next().value;
  if(while_keyword && while_keyword.value.token.value === "unnapudu") {
    return #`do ${do_block} while ${ctx.next().value}`;
  }
}