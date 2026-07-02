def format_report(title, data):
    count = data.get('count', 0)
    total = data.get('total', 1)
    precision = data.get('precision', 2)
    rate = count / max(total, 1) * 100
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{precision}f}%"
    return report