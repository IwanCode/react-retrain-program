function formatDate (date: string, format: string) {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      const formats = {
        dd : new Date(date).getDate(),
        mm : new Date(date).getMonth(),
        yy : new Date(date).getFullYear()
      } as any;

      const formatList = format.split('/');

      return formatList.reduce((acc, item) => {
          if (item === 'mm') {
            return  `${acc} ${monthNames[formats[item]]}`;

          }
          else if (item === 'yy') {
            return `${acc}, ${formats[item]}`
          }
          return  `${acc} ${formats[item]}`;
      }, '');
}

export { formatDate };