package com.wellsfargo.userdetailsservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.wellsfargo.userdetailsservice.models.User;
import com.wellsfargo.userdetailsservice.service.UserRepository;
import com.wellsfargo.userdetailsservice.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserDetailsServiceApplicationTests {

	@Autowired
	private UserService userService;
	
	@MockBean
	private UserRepository userRepo;

		@Test
		public void saveUserTest() {
			
			User user = new User();
			user.setUsername("Shankar");
			user.setPassword("Shankar");
			user.setMobile("9641657888");
			user.setConfirmed(false);
			user.setEmail("a@gmail.com");
			user.setIsAdmin(false);
			assertEquals(user, user);
		}

}
