let percent = prompt("Enter your Percentage :")
if(percent >=50 && percent<=60){
    document.write("Grade : C")
}
else if(percent >=61 && percent<=70){
    document.write("Grade : B")
}
else if(percent >=71 && percent<=80){
    document.write("Grade : B+")
}
else if(percent >=81 && percent<=90){
    document.write("Grade : A")
}
else if(percent >=91 && percent<99){
    document.write("Grade : A+")
}
else{
    document.write("Invalid Data !!!")
}