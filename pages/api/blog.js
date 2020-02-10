const myData = [{
  author: "Steve",
  title: 'First Post',
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ultrices ex. Morbi maximus odio vel lorem posuere laoreet. Aliquam rutrum blandit vulputate. Etiam gravida placerat nisl, ut iaculis nisl luctus at. Donec consectetur eros sed eleifend rutrum. Fusce vel arcu aliquam, malesuada turpis ac, aliquet arcu. Nunc egestas est a posuere auctor. Sed erat eros, consequat sed quam vel, egestas molestie nisl. Ut porta urna feugiat, ultricies quam lobortis, mattis lectus.",
  date: "2/1/2020",
  _id: 1

},{
  author: "Steve",
  title: 'Second Post',
  content: "Duis a volutpat mi, vitae tempus nulla. Curabitur varius, dolor in tincidunt lacinia, tortor lorem congue libero, et accumsan ante nunc eget arcu. Mauris luctus sem non orci malesuada, dignissim luctus sapien cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in vestibulum erat, a sodales erat. Nulla id nisi nunc. Vivamus faucibus finibus pharetra. Aliquam condimentum ante mi, nec porttitor enim tempor ac. Pellentesque non ultrices magna, non maximus nisl. Cras egestas congue feugiat. Ut quis nunc blandit, lobortis lorem eget, elementum mauris.",
  date: "2/2/2020",
  _id: 2
}]


// export default (req, res) => {
//   res.status(200).json(myData);
// };


export default (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(myData);
      break
    case 'POST':
      console.log(req)
      myData.push(req.body)
      console.log(myData)
      res.status(200).json(myData)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end() //Method Not Allowed
      break
  }
}