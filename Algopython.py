
matrix = [
  [1,2,3],
  [-3,-5,-7],
  [0,7,-11],
  [45,-90,1]
]
""" length = len(matrix)
lengthC= len(matrix[0])
subList = []
myDict = {}
for i in range(lengthC ):
  for j in range(length):
    subList.append(matrix[j][i])
  myDict[i+1] = subList
  subList = []
myMax = myDict.get(1)
myMaxColumn = 0
myMin = myDict.get(1)
myMinColumn = 0
for key, value in myDict.items():
    if sum(value) > sum(myMax):
      myMax = value
      myMaxColumn = key
    if sum(value) < sum(myMin):
      myMin = value
      myMinColumn = key
print("Maximum sum:{x} = {r} in {index} column".format(x=myMax, r=sum(myMax), index=myMaxColumn))
print("Minimum sum:{x} = {r} in {index} column".format(x=myMin, r=sum(myMin), index=myMinColumn))
for item in matrix:
  item[myMaxColumn-1], item[myMinColumn-1] = item[myMinColumn-1], item[myMaxColumn-1]
print("Matrix after permuation:")
for i in matrix:
  print(i)
 """
 
 
length = len(matrix)
subList = []
myDict = {}
for i in range(length-1):
  for j in range(length):
    subList.append(matrix[j][i])
  myDict[i+1] = subList
  subList = []
myMax = myDict.get(1)
myMaxColumn = 0
myMin = myDict.get(1)
myMinColumn = 0
for key, value in myDict.items():
    if sum(value) > sum(myMax):
      myMax = value
      myMaxColumn = key
    if sum(value) < sum(myMin):
      myMin = value
      myMinColumn = key
print("Maximum sum:{x} = {r} in {index} column".format(x=myMax, r=sum(myMax), index=myMaxColumn))
print("Minimum sum:{x} = {r} in {index} column".format(x=myMin, r=sum(myMin), index=myMinColumn))
for item in matrix:
  item[myMaxColumn-1], item[myMinColumn-1] = item[myMinColumn-1], item[myMaxColumn-1]
print("Matrix after permuation:")
for i in matrix:
  print(i)