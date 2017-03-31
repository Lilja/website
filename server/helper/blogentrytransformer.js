module.exports = {
	process_entry: (elem) => {
		let object = {}
		// Transform meta-data of json entry to our liking.
		// It will look like something like this.
		// [key:value;key2:value2;...]

		// Our regex will look like this.
		// Match, [ then everything except ] and then a ].
		const regExp = new RegExp(/\[[^\]]+\]/g)

		// Transform our data
		let metadata =
			// Regex search
			elem.match(regExp)

			// Yields an array, I guess we're only interested in the first.
			[0]

			// Replace filthy newlines
			.replace(/\n*/g, "")

			// Since we're grepin' for a bracket, remove it.
			.slice(1)

			// Same goes for last one.
			.slice(0, -1)

			// Finally, we have a semi-colon separated list. Split by ;
			.split(";")

			// Loop to get results
			.forEach((elem) => {
				// Define our key/values.
				const kv = elem.split(":")

				// map key to value in the returned object.
				object[kv[0]] = kv[1].trim()
			})

		// Replace our gnarly meta-data string to empty string and we're off.
		object['body'] = elem.replace(regExp, "")

		return object
	}
}
