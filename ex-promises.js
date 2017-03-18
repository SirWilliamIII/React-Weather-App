/**
 * Created by willcarpenter on 3/17/17.
 */
//
// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Denver', function(err, temp) {
//     if(err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
//
// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout( function() {
//             resolve( 79 );
//             reject( 'City not found' );
//         }, 1000);
//     });
// }
//
// getTempPromise('Denver').then(function(temp) {
//     console.log('Promises are weird. It is ', temp);
// }, function(err) {
//     console.log('promise errrrrror', err);
// });


function addPromise(a, b){
    return new Promise(function(resolve, reject) {
        var sum = a + b;
        (typeof sum === 'number') ? resolve(sum) : reject('Both entries must be numbers');
    });
}

addPromise(64, 32).then(function(temp) {
    console.log('Well done, you are a real genius. The sum is ', temp);
}, function(err) {
    console.log('Error, bitch. ', err);
});





