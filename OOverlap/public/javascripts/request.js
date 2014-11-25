$(function() {
	function jQuery_GetFriend(email, callback) {
		$.ajax({
			type: 'POST',
			url: '/user/friend/get',
			data: {
				email : email
			}
		}).done(function(msg) {
			callback(msg);
		});
	}

	function jQuery_BindGetFriend() {
		// For Getting Friend Info From Server:
		$('#get-friend').bind('click',
			function(event) {
				$('#output').html('Finding..');
				// Get the friend email to lookup:
				var email= $('input').eq(0).val();

				jQuery_GetFriend(email, function(friend) {
					if (friend.email === undefined) {
						$('#output').html('Friend Not Found');
					} else {
						$('#output').html(friend.name + " " + friend.email);
					}
				});
				// Reset input field:
				$('input').val('');
				return false;
			});
	}

	function jQuery_FindFriend(email, callback) {
		$.ajax({
			type: 'POST',
			url: '/user/friend/find',
			data: {
				email : email
			}
		}).done(function(msg) {
			callback(msg);
		});
	}

	function jQuery_BindFindFriend() {
		// For Getting Friend Info From Server:
		$('#find-friend').bind('click',
			function(event) {
				// Get the friend email to lookup:
				var email = $('input').eq(1).val();
				if (email.indexOf('@')<0){
					$('#friend-output').html('Please provide a valid email address');	
					return false;
				}
				$('#friend-output').html('Finding..');
				
				jQuery_FindFriend(email, function(data) {
					if (data.error) {
						$('#friend-output').html('Cannot find user with email ' + email);
					} else if (data.friend_exist){
						$('#friend-output').html('User with email ' + email + ' already in your friend list');
					} else if (data.request_sent_exist){	
						$('#friend-output').html('You already sent a request to user with email ' + email);	
					} else if (data.request_received_exist){
						$('#friend-output').html('User with email ' + email + ' already sent your a request, please check your pending requests');	
					} else {
						$('#friend-output').html(data.friend.name + " " + data.friend.email);
					}
				});
				// Reset input field:
				$('input').val('');
				return false;
			});
	}

	jQuery_BindGetFriend();
	jQuery_BindFindFriend();
});