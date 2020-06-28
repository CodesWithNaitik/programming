# All media file is available for download as a zip file (See description)
import tkinter 
import cv2 # pip install opencv-python
import PIL.Image, PIL.ImageTk # pip install pillow
from functools import partial
import threading
import time
import os
from flask import Flask, render_template, request
import pickle
from tkinter import filedialog
import imutils # pip install imutils
def get_drs(video, get_window):
    stream = cv2.VideoCapture(video)
    flag = True
    def play(speed):
        global flag
        print(f"You clicked on play. Speed is {speed}")

        # Play the video in reverse mode
        frame1 = stream.get(cv2.CAP_PROP_POS_FRAMES)
        stream.set(cv2.CAP_PROP_POS_FRAMES, frame1 + speed)

        grabbed, frame = stream.read()
        global flag
        if not grabbed:
            exit()
        frame = imutils.resize(frame, width=SET_WIDTH, height=SET_HEIGHT)
        frame = PIL.ImageTk.PhotoImage(image = PIL.Image.fromarray(frame))
        canvas.image = frame
        canvas.create_image(0,0, image=frame, anchor=tkinter.NW)
    def pending(decision):
        # 1. Display decision pending image
        frame = cv2.cvtColor(cv2.imread("as.png"), cv2.COLOR_BGR2RGB)
        frame = imutils.resize(frame, width=SET_WIDTH, height=SET_HEIGHT)
        frame = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame))
        canvas.image = frame
        canvas.create_image(0,0, image=frame, anchor=tkinter.NW)
        # 2. Wait for 1 second
        time.sleep(1.5)

        # 3. Display sponsor image
        frame = cv2.cvtColor(cv2.imread("pa.png"), cv2.COLOR_BGR2RGB)
        frame = imutils.resize(frame, width=SET_WIDTH, height=SET_HEIGHT)
        frame = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame))
        canvas.image = frame
        canvas.create_image(0,0, image=frame, anchor=tkinter.NW)

        # 4. Wait for 1.5 second
        time.sleep(2.5)
        # 5. Display out/notout image
        if decision == 'out':
            decisionImg = "doni.png"
            frame2 = cv2.cvtColor(cv2.imread(decisionImg), cv2.COLOR_BGR2RGB)
            frame2 = imutils.resize(frame2, width=SET_WIDTH, height=SET_HEIGHT)
            frame2 = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame2))
            canvas.image = frame2
            canvas.create_image(0,0, image=frame2, anchor=tkinter.NW)

        else:
            decision2Img = "not.png"
            frame3 = cv2.cvtColor(cv2.imread(decision2Img), cv2.COLOR_BGR2RGB)
            frame3 = imutils.resize(frame3, width=SET_WIDTH, height=SET_HEIGHT)
            frame3 = PIL.ImageTk.PhotoImage(image=PIL.Image.fromarray(frame3))
            canvas.image = frame3
            canvas.create_image(0,0, image=frame3, anchor=tkinter.NW)


    def out():
        thread = threading.Thread(target=pending, args=("out",))
        thread.daemon = 1
        thread.start()
        print("Player is out")


    def not_out():
        thread = threading.Thread(target=pending, args=("not out",))
        thread.daemon = 1
        thread.start()
        print("Player is not out")

    # Width and height of our main screen
    SET_WIDTH = 1000
    SET_HEIGHT = 500

    # Tkinter gui starts here
    canvas = tkinter.Canvas(get_window, width=SET_WIDTH, height=SET_HEIGHT,relief=tkinter.GROOVE, bd=5)
    canvas.grid(row=0,column=0)


    # Buttons to control playback
    btn = tkinter.Button(get_window, text="<< Previous (fast)",  command=partial(play, -25),relief=tkinter.GROOVE, bd=5,bg="yellow")
    btn.place(x=150,y=520)

    btn = tkinter.Button(get_window, text="<< Previous (slow)", command=partial(play, -2),relief=tkinter.GROOVE, bd=5,bg="yellow")
    btn.place(x=30,y=520)

    btn = tkinter.Button(get_window, text="Next (slow) >>", command=partial(play, 2),relief=tkinter.GROOVE, bd=5,bg="yellow")
    btn.place(x=270,y=520)

    btn = tkinter.Button(get_window, text="Next (fast) >>", command=partial(play, 25),relief=tkinter.GROOVE, bd=5,bg="yellow")
    btn.place(x=370,y=520)

    btn = tkinter.Button(get_window, text="Give Out", command=out,relief=tkinter.GROOVE, bd=5,bg="yellow")
    btn.place(x=570,y=520)

    btn = tkinter.Button(get_window, text="Give Not Out", command=not_out,relief=tkinter.GROOVE, bd=5,bg="yellow")
    btn.place(x=470,y=520)
    get_window.config(bg="yellow")
    canvas.config(bg="yellow")
    canvas.create_text(500,250, text="Press Next Slow >> for run your video.\nThis help you to play video in Slow Motion.\nGive out And Not Out are only for Cricket.\nMatchto see Weather Player is Out or Not",
                       font=("Times New Roman", 25, "bold"))
def mainapp():
    root=tkinter.Tk()
    text_url = filedialog.askopenfilename(initialdir = os.getcwd(),title= "select file",filetypes = (("Video","*.wmv"),("Video","*MKV"),("All files","*.*")))
    get_drs(text_url,root)
    root.mainloop()
app=Flask(__name__) 
@app.route("/", methods=["GET", "POST"])
def hell_world():
    if request.method == "POST":
        mainapp()
    return render_template("index.html")
if __name__=="__main__":

    app.run(debug=True)
    