int led = 13;
int led1 = 12;
int led2 = 11;
int led3 = 10;
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(led, OUTPUT); 
  pinMode(led1, OUTPUT); 
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
}

void loop() {
  digitalWrite(led, 1); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED on (HIGH is the voltage level)
  delay(100); 
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);// wait for a second
  digitalWrite(led, 1); 
  digitalWrite(led1, 1);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);
  delay(100); 
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);// wait for a second
  digitalWrite(led, 1); 
  digitalWrite(led1, 1);
  digitalWrite(led2, 1);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);  
  digitalWrite(led, 1); 
  digitalWrite(led1, 1);
  digitalWrite(led2, 1);
  digitalWrite(led3, 1);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 1);
  digitalWrite(led2, 1);
  digitalWrite(led3, 1);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 1);
  digitalWrite(led3, 1);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 1);// turn the LED off by making the voltage LOW
  delay(100);
  digitalWrite(led, 0); 
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);// turn the LED off by making the voltage LOW
  delay(100);// wait for a second
}
