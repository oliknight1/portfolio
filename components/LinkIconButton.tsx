import { IconButton, Link } from '@chakra-ui/react';
import React, { FC } from 'react';
import { LinkIcon } from '../types';

interface LinkIconButtonProps extends LinkIcon {
}

const LinkIconButton : FC<LinkIconButtonProps> = ( { name, icon, url } ) => (
	<Link href={url} isExternal>
		<IconButton variant="unstyled" _hover={{ color: 'brand.red', transform: 'translateY(-5px) scale(1.1)' }} aria-label={name} icon={icon} />
	</Link>
);

export default LinkIconButton;
