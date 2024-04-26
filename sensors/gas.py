import RPi.GPIO as GPIO
import time

# Set GPIO mode
GPIO.setmode(GPIO.BCM)

# Define the sensor pin
analog_pin = 25

# Define the LED pin
led_pin = 17

# Read gas sensor data
def read_gas_sensor(analog_pin):
    GPIO.setup(analog_pin, GPIO.IN)
    analog_value = GPIO.input(analog_pin)
    return analog_value

# Set up LED pin as output
#GPIO.setup(led_pin, GPIO.OUT)

try:
    #while True:
    gas_value = read_gas_sensor(analog_pin)
    print(f"Gas Concentration: {gas_value}")

        # Control the LED based on gas concentration
    if gas_value > 500:
        GPIO.output(led_pin, GPIO.HIGH)  # Turn on the LED
        time.sleep(0.5)  # LED on for 0.5 seconds
        GPIO.output(led_pin, GPIO.LOW)   # Turn off the LED
    else:
        #GPIO.output(led_pin, GPIO.LOW)   # Turn off the LED
        time.sleep(1.5)  # Wait for 1.5 seconds before repeating

except KeyboardInterrupt:
    GPIO.cleanup()