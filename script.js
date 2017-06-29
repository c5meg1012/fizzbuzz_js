function isMultiple (i, baseInt) {
  if ( i % baseInt === 0 ) {
    return true;
  } else {
    return false;
  }
};

function selectMessage (i, baseInt, baseInt2) {
  var message = i;
  if ( isMultiple(i, baseInt) && isMultiple(i, baseInt2) ) {
    message = 'FizzBuzz';
  } else if ( isMultiple(i, baseInt) ) {
    message = 'Fizz';
  } else if ( isMultiple(i, baseInt2) ) {
    message = 'Buzz';
  }
  return message;
}

function FizzBuzz (baseInt, baseInt2, max) {
  var i = 1;
  while ( i <= max ) {
    message = selectMessage(i, baseInt, baseInt2);
    console.log(message);
    i++;
  }
}

FizzBuzz(3, 5, 100);

console.log('---------------');

// テスト

function assertion(a, b) {
  if ( a === b ) {
    console.log('true');
  } else {
    console.log('false');
  }
}

assertion(selectMessage(1, 3, 5), 1);
assertion(selectMessage(3, 3, 5), 'Fizz');
assertion(selectMessage(5, 3, 5), 'Buzz');
assertion(selectMessage(15, 3, 5), 'FizzBuzz');
assertion(selectMessage(45, 3, 5), 'FizzBuzz');
assertion(selectMessage(99, 3, 5), 'Fizz');
assertion(selectMessage(100, 3, 5), 'Buzz');
assertion(selectMessage(101, 3, 5), 101);
