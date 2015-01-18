import mraa
import time
#import threading

# Setup
dir = mraa.Gpio(12)
dir.dir(mraa.DIR_OUT) 
dir.write(1)
step = mraa.Gpio(13)
step.dir(mraa.DIR_OUT)

# Loop
while True:
	step.write(1)
	time.sleep(0.0001)
	step.write(0)
	time.sleep(0.0001)