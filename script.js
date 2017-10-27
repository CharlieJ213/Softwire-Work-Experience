$(document).ready(function(){
	let SectionCounter = 1
	let QuestionCounter = 0
	let Results = 0
//Object filled with Questions and answers for each section. The first answer for every Array of answers is the correct answer.
	let QsAndAs = {
		"1": {
			"Questions": ["What is the Song and Artist name of the following?", "What is the name of this song?", "Which Elbow album does this song feature on?"],
			"Source": ["Question1Audio.wav", "Question2Audio.wav", "Question3Audio.wav"],
			"CorrectAns": ["Blind Faith - Chase and Status", "Have A Nice Day", "The Seldom Seen Kid"],
			"Answers": {
				"1": ["The Rockafeller Skank - Fat Boy Slim", "Blind Faith - Chase and Status", "Too Close - Alex Clare", "Turn Down For What - DJ Snake"],
				"2": ["Radioactive", "Bohemian Like You", "Have A Nice Day", "Hostage"],
				"3": ["The Seldom Seen Kid", "Little Fictions", "Asleep in the Back", "Leaders of the Free World"],
			}
		},
		"2": {
			"Questions": ["Who did Public Enemy mainly sample in their track 'Harder Than You Think'?", "Who did Kanye West sample in his track 'Touch the Sky'?", "Who did The Beatles cover with their track 'Twist and Shout'?"],
			"CorrectAns": ["Shirley Bassey", "Curtis Mayfield", "Isley Brothers"],
			"Answers": {
				"1": ["Jerry-Lee Lewis", "Otis Redding", "Shirley Bassey", "Fat Boy Slim"],
				"2": ["Curtis Mayfield", "Al Green", "James Brown", "Marvin Gaye"],
				"3": ["Beach Boys", "Bob Dylan", "Chuck Berry", "Isley Brothers"],
			}
		},
		"3": {
			"Questions": ["Who headlined the last night of the Reading Festival 2017?", "Why could the Foo Fighters not play Glastonbury 2015?"],
			"CorrectAns": ["Muse", "Lead singer broke his leg"],
			"Answers": {
				"1": ["Queens of the Stone Age", "Kasabian", "Muse", "Eminem"],
				"2": ["Lead singer broke his leg", "Their flights were cancelled", "They didn't want to", "Personal issues for one of the members"],
			}
		},
		"4": {
			"Questions": ["Where in America did The Black Keys originate?", "Where in the UK did the Arctic Monkeys originate?"],
			"CorrectAns": ["Seattle", "Sheffield"],
			"Answers": {
				"1": ["New York", "Seattle", "Los Angeles", "Wisconsin"],
				"2": ["Manchester", "London", "Cardiff", "Sheffield"],
			}
		},
	}

	 $('.Choices').on('mouseenter', function() {
	    $(event.currentTarget).addClass("highlighted")
	});

	 $('.Choices').on('mouseleave', function() {
	    $(event.currentTarget).removeClass("highlighted")
	});

	 $('.Choices').on('click', function() {
	    $('#ChangeQ').removeClass('invisible')
	    if (ChoiceCheck($(event.currentTarget).text())) {
	    	alert('Correct')
	    } else {
	    	alert('incorrect')
	    }
	});

	 $('#ChangeQ').on('click', function() {
	 	NextQ()
	});

	function NextQ() {
		let ObjHolder = QsAndAs[SectionCounter]
		if (QuestionCounter >= 3 || (QuestionCounter >= 2 && SectionCounter >= 3)) {
			SectionCounter = eval(SectionCounter + 1)
			QuestionCounter = 0
		} else {
			QuestionCounter = QuestionCounter + 1
		}

		if (SectionCounter = 1) {
			$('#player').attr('src', ObjHolder.Source[QuestionCounter - 1])
			$('#player').removeClass('invisible')
		} else {
			$('#player').addClass('invisible')
		}
	
		$("#question").text(ObjHolder.Questions[QuestionCounter - 1])
		for (let Index = 0; Index <= 3; Index++) {
			let temp = ObjHolder.Answers[QuestionCounter][Index]
			$("#multiple" + (Index + 1)).text(temp)
		}
		$('#ChangeQ').addClass('invisible')
	}

	function ChoiceCheck(Text) {
		let ObjHolder = QsAndAs[SectionCounter]
		if (Text === ObjHolder.CorrectAns[QuestionCounter - 1]) {
			Results = Results + 1
			return true
		} else {
			return false
		}
	}

    NextQ()

});