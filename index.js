

// let otp ;
// otp= Math.random()*10000
// console.log(Math.floor(otp))
// let counter = document.querySelector(".counter");
// let count =  document.querySelector(".count-box")


// counter.addEventListener("click",()=>{
//     count.innerHTML = Math.floor(otp)
// })
// Get reference to the DOM elements
const otpDisplay = document.getElementById('otp');
const generateOtpButton = document.getElementById('generate-otp');

// Function to generate a random OTP
function generateOtp(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let otp = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        otp += chars[randomIndex];
    }
    return otp;
}

// Event listener for the button
generateOtpButton.addEventListener('click', () => {
    const otp = generateOtp(6); // Generate a 6-character OTP
    otpDisplay.textContent = otp;
});
