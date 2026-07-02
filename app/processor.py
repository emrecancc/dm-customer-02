import re


def parse_line(line):
    m = re.match(r'(?P<key>\w+)=(?P<value>\d+)', line)
    if m:
        return m.group('key'), int(m.group('value'))
    return None
