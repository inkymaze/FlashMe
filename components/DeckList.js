import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { white, blue } from '../utils/colors';
import { connect } from 'react-redux';
import { AppLoading} from 'expo'
import { requestDecks } from '../actions';
import _ from 'lodash';

class DeckList extends React.Component {
  constructor(props){
    super(props)
    // this.selectDeck = this.selectDeck.bind(this)
  }
  state = {
    ready: false,
  }

  componentDidMount() {
    this.props.requestDecks()
      .then(() => this.setState(() => ({ready: true})))
  }

  // selectDeck(title) {
  //   console.log('selecDEck title',title);
  // }


  // Ask udacity why this doesnt work
  // renderItem({item}) {... but the below does 

  renderItem = ({item}) => {
      // console.log('renderDeck',props);
      let question = item.questionCount === 1 ? 'question' : 'questions';
       return (
         <TouchableOpacity style={styles.deck}
           onPress={() => this.props.navigation.navigate(
             'DeckDetail'
           )}
         >
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.question}>{item.questionCount} {question}</Text>
         </TouchableOpacity>
       );
   }


 // renderItems() {
 //   return _.map(this.props.decks, deck => {
 //     console.log('indivi', deck);
 //     return (
 //      <View key={deck}>
 //        <Text >{deck.title}</Text>
 //
 //      </View>
 //      )
 //    })
 //  }

//
//    return _.map(sortedPosts, post => {
//
//   return (
//     <ul className='post-info' key={post.id}>
//       <PostsDetail post={post} key={post.id} count={this.commentCount(post.id)}/>
//         <div className='vote-buttons'>
//           <button onClick={() => {this.updateVoteScore(post.id, 'upVote');}}>Upvote</button>
//           <button onClick={() => {this.updateVoteScore(post.id, 'downVote');}}>Downvote</button>
//         </div>
//     </ul>
//   );
//
// });




  render() {
    const { ready } = this.state

    console.log('Deck list props',this.props);
    // console.log('deck list state', this.state);

    const decks = _.map(this.props.decks, deck => {
           return {
               title: deck.title,
               questionCount: deck.questions.length
           }
       });

    if (ready === false) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>

        <FlatList
         data={decks}
         renderItem={this.renderItem}
         keyExtractor={item => item.title}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: white
  },
  deck: {
    height: 100,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: blue,
},
  title: {
    fontSize: 29,
    color: blue,
  },
  question: {
    fontSize: 17,
    color: blue
  }

});

// const mapStateToProps = (decks) => {
//   return {
//     decks: (Object.keys(decks).reduce((result, id) => {
//       // console.log('result',decks[id]);
//       result.push(decks[id])
//
//       return result
//     }, []))
//   }
// }


const mapStateToProps = ({decks}) => ({
  decks
});

  // function mapStateToProps (decks) {
  //   return {
  //     decks: (Object.keys(decks).reduce((result, id) => {
  //       result.push(decks[id])
  //       return result
  //     }, [])).reverse()
  //   }
  // }

export default connect(mapStateToProps, { requestDecks })(DeckList);
