import {
	Avatar,
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useDisclosure,
	Image,
	HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
	const { user, signInWithGoogle, logout } = useAuth();
	const { onOpen, isOpen, onClose } = useDisclosure();

	const handleGoogleLogin = async () => {
		try {
			await signInWithGoogle();
			console.log('success');
		} catch (error) {
			console.log('errr', error);
		}
	};

	return (
		<Box py="4" mb="2">
			<Container maxW={'container.xl'}>
				<Flex justifyContent={'space-between'}>
					{/* Box Logo Container*/}
					<Link to="/">
						<HStack>
							<Image src="/public/logo2.png" height="48px" />
							<Box fontSize={'normal'} fontWeight="600" color="#d9d9d9">
								VGG Movies
							</Box>
						</HStack>
					</Link>

					{/* DESKTOP */}
					<Flex
						gap="4"
						alignItems={'center'}
						display={{ base: 'none', md: 'flex' }}>
						<Link to="/">Inicio</Link>
						<Link to="/movies">Películas </Link>
						<Link to="/shows">TV Shows</Link>
						<Link to="/search">
							<SearchIcon fontSize={'xl'} />
						</Link>
						{user && (
							<Menu>
								<MenuButton>
									<Avatar
										bg={'red.500'}
										color={'white'}
										size={'sm'}
										name={user?.email}
									/>
								</MenuButton>
								<MenuList>
									<Link to="/watchlist">
										<MenuItem>Mi Lista</MenuItem>
									</Link>
									<MenuItem onClick={logout}>Salir</MenuItem>
								</MenuList>
							</Menu>
						)}
						{!user && (
							<Avatar
								size={'sm'}
								bg={'gray.800'}
								as="button"
								onClick={handleGoogleLogin}
							/>
						)}
					</Flex>

					{/* Mobile */}
					<Flex
						display={{ base: 'flex', md: 'none' }}
						alignItems={'center'}
						gap="4">
						<Link to="/search">
							<SearchIcon fontSize={'xl'} />
						</Link>
						<IconButton onClick={onOpen} icon={<HamburgerIcon />} />
						<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
							<DrawerOverlay />
							<DrawerContent bg={'black'}>
								<DrawerCloseButton />
								<DrawerHeader>
									{user ? (
										<Flex alignItems="center" gap="2">
											<Avatar bg="red.500" size={'sm'} name={user?.email} />
											<Box fontSize={'sm'}>
												{user?.displayName || user?.email}
											</Box>
										</Flex>
									) : (
										<Avatar
											size={'sm'}
											bg="gray.800"
											as="button"
											onClick={handleGoogleLogin}
										/>
									)}
								</DrawerHeader>

								<DrawerBody>
									<Flex flexDirection={'column'} gap={'4'} onClick={onClose}>
										<Link to="/">Inicio</Link>
										<Link to="/movies">Películas </Link>
										<Link to="/shows">TV Shows</Link>
										{user && (
											<>
												<Link to="/watchlist">Mi Lista</Link>
												<Button
													variant={'outline'}
													colorScheme="red"
													onClick={logout}>
													Salir
												</Button>
											</>
										)}
									</Flex>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
