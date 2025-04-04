from flask import Flask, request, render_template_string
import random
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

# Email credentials for sending OTP via email
email_user = 'mikesamuel8312@gmail.com'       # Replace with your Gmail address
email_password = 'rpsk hapa puvp tgcn'    # Replace with your Gmail password

# HTML template (you can use a separate file or inline like this)
template = '''
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup Form</title>
    <!-- <link rel="stylesheet" href="login.css"> -->
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        font-family: Arial, sans-serif;
        text-align: center;
        /* background-color: #f9f5ed; */
        color: #ffffff;
        transition: background 0.3s, color 0.3s;
        background: url("images/back_img.jpg") no-repeat center center fixed;
        background-size: cover;
      }

      .glass-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #login-section {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        height: auto;
        gap: 15px;
        position: relative;
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.089);
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.325);
      }

      #login-section h2 {
        margin-bottom: 10px;
        font-size: 30px;
      }

      input {
        margin: 8px 0;
        padding: 10px;
        width: 90%;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      button {
        margin-top: 10px;
        padding: 10px;
        width: 60%;
        border: none;
        background-color: #c18b17;
        color: white;
        cursor: pointer;
        border-radius: 5px;
      }

      button:hover {
        background-color: #96d809;
      }

      .otp-container {
        display: none;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 90%;
      }

      .otp-input {
        width: 70%;
      }

      .verify-btn {
        width: 26%;
        background-color: #c18b17;
      }

      .verify-btn:hover {
        background-color: #008000;
      }

      /* .form-row {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
      } */
      .form-row {
        width: 90%;
        display: flex;
        flex-direction: column; /* changed from row */
        align-items: center; /* aligns items to the left for a form-like look */
        gap: 8px; /* spacing between email input and button */
      }
      .email-input{
        width: 100%;
      }
      .send-otp-btn {
        width: 60%;
      }

      .error {
        color: #ff6666;
        font-size: 12px;
        text-align: left;
        width: 90%;
        display: block;
        margin-top: -5px;
      }

      #signupForm {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }

      .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border-radius: 5px;
        max-width: 300px;
        z-index: 1000;
        display: none;
      }

      .toast-title {
        font-weight: bold;
        margin-bottom: 5px;
      }
    </style>
  </head>
  <body>
    <div class="glass-container">
      <section id="login-section">
        <h2>Signup</h2>
        <form id="signupForm">
          <input type="text" id="fullName" placeholder="Enter your full name" />
          <span id="fullNameError" class="error"></span>

          <div class="form-row">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="email-input"
            />
            <button type="button" id="sendOtpBtn" class="send-otp-btn">
              Send OTP
            </button>
          </div>
          <span id="emailError" class="error"></span>

          <div class="otp-container" id="otpContainer">
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP sent to your email"
              maxlength="6"
              class="otp-input"
            />
            <button type="button" id="verifyOtpBtn" class="verify-btn">
              Verify
            </button>
          </div>
          <span id="otpError" class="error"></span>

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <span id="passwordError" class="error"></span>

          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
          <span id="confirmPasswordError" class="error"></span>

          <button type="submit" class="submit-btn">Sign Up</button>
        </form>
      </section>
    </div>

    <div class="toast" id="toast">
      <div class="toast-title" id="toastTitle"></div>
      <div class="toast-description" id="toastDescription"></div>
    </div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const fullNameInput = document.getElementById("fullName");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirmPassword");
        const otpInput = document.getElementById("otp");
        const sendOtpBtn = document.getElementById("sendOtpBtn");
        const verifyOtpBtn = document.getElementById("verifyOtpBtn");
        const otpContainer = document.getElementById("otpContainer");
        const signupForm = document.getElementById("signupForm");

        // Error spans
        const fullNameError = document.getElementById("fullNameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById(
          "confirmPasswordError"
        );
        const otpError = document.getElementById("otpError");

        // Toast elements
        const toast = document.getElementById("toast");
        const toastTitle = document.getElementById("toastTitle");
        const toastDescription = document.getElementById("toastDescription");

        // OTP verification state
        let generatedOtp = "";
        let isOtpVerified = false;

        // Show toast function
        function showToast(title, description, duration = 3000) {
          toastTitle.textContent = title;
          toastDescription.textContent = description;
          toast.style.display = "block";

          setTimeout(() => {
            toast.style.display = "none";
          }, duration);
        }

        // Validate email function
        function validateEmail(email) {
          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
        }

        // Send OTP button click handler
        sendOtpBtn.addEventListener("click", function () {
          // Validate email first
          if (!emailInput.value) {
            emailError.textContent = "Email is required";
            return;
          }

          if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid email";
            return;
          }

          // Clear previous errors
          emailError.textContent = "";

          // Disable the button and show loading state
          sendOtpBtn.disabled = true;
          sendOtpBtn.textContent = "Sending...";

          // Generate a 6-digit OTP
          generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

          // Simulate sending the OTP (in a real app, this would call a backend API)
          setTimeout(() => {
            sendOtpBtn.disabled = false;
            sendOtpBtn.textContent = "Send OTP";
            otpContainer.style.display = "flex";

            showToast(
              "OTP Sent!",
              `We've sent an OTP to ${emailInput.value}. For demo purposes, your OTP is: ${generatedOtp}`
            );

            console.log("Generated OTP:", generatedOtp);
          }, 1500);
        });

        // Verify OTP button click handler
        verifyOtpBtn.addEventListener("click", function () {
          if (!otpInput.value) {
            otpError.textContent = "Please enter the OTP";
            return;
          }

          if (otpInput.value === generatedOtp) {
            isOtpVerified = true;
            otpError.textContent = "";
            verifyOtpBtn.textContent = "✓";
            verifyOtpBtn.style.backgroundColor = "#4CAF50";
            verifyOtpBtn.disabled = true;
            sendOtpBtn.textContent = "Verified";
            sendOtpBtn.disabled = true;
            otpInput.disabled = true;

            showToast(
              "OTP Verified!",
              "Your email has been verified successfully."
            );
          } else {
            otpError.textContent = "Invalid OTP, please try again";
          }
        });

        // Form submission handler
        signupForm.addEventListener("submit", function (e) {
          e.preventDefault();

          // Reset all errors
          fullNameError.textContent = "";
          emailError.textContent = "";
          passwordError.textContent = "";
          confirmPasswordError.textContent = "";
          otpError.textContent = "";

          // Basic form validation
          let isValid = true;

          if (!fullNameInput.value) {
            fullNameError.textContent = "Full name is required";
            isValid = false;
          }

          if (!emailInput.value) {
            emailError.textContent = "Email is required";
            isValid = false;
          } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid email";
            isValid = false;
          }

          if (!passwordInput.value) {
            passwordError.textContent = "Password is required";
            isValid = false;
          } else if (passwordInput.value.length < 8) {
            passwordError.textContent =
              "Password must be at least 8 characters";
            isValid = false;
          }

          if (!confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Please confirm your password";
            isValid = false;
          } else if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
          }

          if (!isOtpVerified) {
            showToast(
              "Email not verified",
              "Please verify your email with OTP before signing up",
              5000
            );
            return;
          }

          if (isValid) {
            // In a real application, you would send this data to your backend
            console.log("Form submitted:", {
              fullName: fullNameInput.value,
              email: emailInput.value,
              password: passwordInput.value,
            });

            showToast(
              "Account created!",
              "Your account has been created successfully."
            );

            // Reset form
            signupForm.reset();
            otpContainer.style.display = "none";
            isOtpVerified = false;
            verifyOtpBtn.textContent = "Verify";
            verifyOtpBtn.style.backgroundColor = "#006400";
            verifyOtpBtn.disabled = false;
            sendOtpBtn.textContent = "Send OTP";
            sendOtpBtn.disabled = false;
            otpInput.disabled = false;
          }
        });
      });
      //       initEmailJS('_bTqRLCLajiXdZSDJ');
      //       const response = await emailjs.send(
      //   'service_prn53sx', // Replace with your EmailJS service ID from Email Services
      //   'template_shdbsjq', // Replace with your EmailJS template ID from Email Templates
      //   templateParams
      // );
    </script>
  </body>
</html>

'''

@app.route('/', methods=['GET'])
def index():
    return render_template_string(template)

@app.route('/register', methods=['POST'])
def register():
    email = request.form.get('email')

    # Generate a random 6-digit OTP
    otp = random.randint(100000, 999999)

    # Send OTP via email
    send_otp_via_email(email, otp)

    return f"OTP sent successfully to {email}. Check your inbox for the OTP."

def send_otp_via_email(email, otp):
    msg = MIMEMultipart()
    msg['From'] = email_user
    msg['To'] = email
    msg['Subject'] = 'OTP for Registration'
    body = f'Your OTP is: {otp}'
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(email_user, email_password)
        text = msg.as_string()
        server.sendmail(email_user, email, text)
        server.quit()
        print(f"Email sent successfully to {email}")
    except Exception as e:
        print(f"Failed to send email. Error: {e}")

if __name__ == '__main__':
    app.run(debug=True)
