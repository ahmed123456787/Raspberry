from gpiozero import LED
from time import sleep

led = LED(17)  # Use GPIO pin 17
try:
    while True:
        led.on()
        sleep(1)
        led.off()
        sleep(1)
except KeyboardInterrupt:
    # When you press Ctrl+C, this block will execute
    led.off()  # Turn off the LED

 