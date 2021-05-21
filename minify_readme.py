from sys import stderr


while True:
    try:
        f = open('README.md', 'r', encoding='utf-8')
    except FileNotFoundError:
        print('README.md not found...', file=stderr)
        break
    contents = f.read()
    char_map = [
        ('a', '4', True),('b', '6', False),('e', '3', True),
        ('g', '9', True),('i', '1', True),('l', '1', True),
        ('o', '0', True),('o', '0', True),('q', '9', True),
        ('s', '5', True),('t', '7', True)
    ]
    for x in char_map:
        if x[2]:
            contents=contents.replace(x[0].upper(), x[1])
        contents=contents.replace(x[0], x[1])
    with open('README.md', 'w', encoding='utf-8') as f:
        f.write(contents)
    print('Done')
    break
