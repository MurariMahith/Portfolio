list = [1,2,3,4,5,6,7,8,9,10]

for i in range(0,len(list)):
    for j in range(0,len(list)):
        if(j >= i):
            print(i, j)