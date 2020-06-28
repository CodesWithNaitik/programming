char val = 'd';
char hello[25];
String mystr
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("Please enter Some Thing:")
  Serial.setTimeout(10000);   // wait for serial data
}

void loop() {
  // put your main code here, to run repeatedly:
}
void simple() {
  if (Serial.available() > 0) {
    // read the incoming byte:
    hello = Serial.read();

    // say what you got:
    Serial.print("I received: ");
    Serial.println(hello, DEC);
  }
  else {
    Serial.print("67");
  }
}
char getchar(void) {
  while (Serial.available() == 0) {
    ;
  }
  return Serial.read();
}
void flush(int time) {
  int dummy;
  delay time;
  do {
    dummy = Serial.read()
  } while ( dummy != -1);
}
void single() {
  hello = getchar();
  Serial.print("I received: ");
  Serial.println(hello);
  flush(200);
}
void readuntil(){
  Serial.readBytesUntil('#',hello,24);
  Serial.print("I received: ");
  Serial.println(hello);
  delay(200);
}
void readstr(){
  mystr = Serial.readString(mystr);
  Serial.print("I received: ");
  Serial.println(mystr);
  delay(200);
}
void many() {
  if (Serial.available() > 0) {
    Serial.readBytes(hello, 24)
    Serial.print("I received: ");
    Serial.println(hello);
    //  flush(200);
  }
  delay(1000);
}
void print() {
  Serial.println("Hello");   // without loading in memmory
  Serial.println(F("Hello"));  //  loading in memmory
  Serial.println(1.23456, 2);
  Serial.write(96)  ;
  Serial.write(val); Serial.print("\n");
  Serial.write(45);
  int bytesSent = Serial.write("hello");
  Serial.println(bytesSent);               // print the length of bytesSent
  int bytesSent = Serial.write(“hello”);
  Serial.println(bytesSent);
  Serial.write(str);
  Serial.write(buf, len);
  Serial.print("Hell\n");
  Serial.println(78, BIN);
  Serial.println(78, OCT);
  Serial.println(78, DEC);
  Serial.println(78, HEX);
  delay(1000);
}
