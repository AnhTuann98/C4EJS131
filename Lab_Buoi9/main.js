// Exercise 1
// sort() -> sắp xếp các gia trị kiểu số trong mảng

// var string = [ 5, 1,4 ,2 ,8 ];
// console.log(string);
// string.sort();
// console.log('Sau khi sap xep:',string);

// // check_snt();
// function check_snt(i){
//     if ( i == 2 ) {
//         console.log(i);
//     }else if ( i > 2 && i < 100 ){
//         for(i; i < 100; i++){
//             if(i % 2 !==0 ){
//                 console.log('so le');
//             }
//         }
//     }else{
//         console.log('false');
//     }
//     return i;
// }
// check_snt();


function isprime(n){
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    
    let flag = 1;

    if (n < 2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i < n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

let n= prompt("Nhap so tu nhien= ");
    

let check = isprime(n);

// if
// ( check == 1 ) {
//     console.log(n + " la so nguyen to");

//     }else {console.log(n + " khong phai la so nguyen to");}