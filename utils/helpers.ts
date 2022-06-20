export const create_letter_array = ( text : string ) : string[] => {
//  Split each word of props.text into an array
	const split_words : string[] = text.split( ' ' );

	// Create storage array
	const letters : string[] = [];

	split_words.forEach( ( word, i ) => {
		const split_letters = word.split( '' );
		letters.push( ...split_letters );
		if ( i < split_words.length - 1 ) {
			letters.push( '\u00A0' );
		}
	} );
	return letters;
};
