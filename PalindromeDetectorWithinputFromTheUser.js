def isPalindrome(a):
    return a == a[::-1]

print("It is a Palindrome??? - (type quit to exit).")

a = ""
b = ""

while True
    print()
    a = input("Please enter a word: ")
    b = isPalindrome(a)

    if a == "quit":
        break

    if b and a != "":
       print()
       print(a.upper() + " is palindrome.")
    if not b:
       print()
       print(a.upper() +  " is not palindrome.")

    print("\nGood bye.")