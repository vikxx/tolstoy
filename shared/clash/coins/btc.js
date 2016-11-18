const satoshiPerCoin=100000000;
const expo = {
  fromSatoshis: function (value_in_satoshis) {
  	return value_in_satoshis / satoshiPerCoin;
  }
}
export {expo as default}
console.log(expo)

exports.test = {
  run: () => {
    let test_spaces = ' in the woods ';
    let successes = 0, failures = 0;

    console.log('inside a test runner of an coins/btc utility','successes', 'failures')

    function test(description, result){
      if (result) successes += 1;
      else failures += 1;
      console.log (`test${result?'+':'-'}'${description}'`, successes, failures);
    }

    test ('expo is an object', typeof expo === 'object');

    console.log(```after passing all the tests:       successes: ${successes},     failures: ${failures}```)
  }
}
