import mraa
import time

# Loop
def open():
	loop_seconds = 5
	start_time = time.time()
	
	while time.time() - start_time < loop_seconds:
	    step.write(1)
		time.sleep(0.0001)
		step.write(0)
		time.sleep(0.0001)

# Setup
dir = mraa.Gpio(12)
dir.dir(mraa.DIR_OUT) 
dir.write(1)
step = mraa.Gpio(13)
step.dir(mraa.DIR_OUT)
open()