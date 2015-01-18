# DoorTroll
_Winter PennApps 2015_
Open your door from your phone. This service allows a user to enter a passcode and use their photo to securely open his or her door.

### Technology used:
 * [Intel Edison](https://www.sparkfun.com/products/13097)
 * Debian ([Ubilinux](http://www.emutexlabs.com/ubilinux) for Edison)
 * Node.js with Express
 * HTML/CSS/JavaScript/jQuery
 * Face recognition
 
### Hardware list:
 * Intel Edison
 * Nema17 stepper motor
 * [EasyDriver](http://www.schmalzhaus.com/EasyDriver/) stepper motor driver
 * 12V power souce for stepper motor driver
 * Spool and box (we 3D printed these)
 
### How to set up your Intel Edison's software
1. Load Debian onto the Edison - [tutorial](https://learn.sparkfun.com/tutorials/loading-debian-ubilinux-on-the-edison#log-into-ubilinux)
2. Install libmraa on Ubilinux for Edison - [tutorial](https://learn.sparkfun.com/tutorials/installing-libmraa-on-ubilinux-for-edison)
3. Clone this repo.
4. Type `node app.js` to start the server.