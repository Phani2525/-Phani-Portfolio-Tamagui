import React, { useState } from 'react';
import {
  Button,
  H3,
  H4,
  Paragraph,
  SimpleDialog,
  XStack,
  TableCol,
  TableCell,
  YStack,
  SizableText,
  Input,
  Separator,
} from 'ui/src';
import { Info, Lock, Plus, Copy, Trash } from '@tamagui/lucide-icons';

interface APIKeyData {
  name: string;
  created: string;
  key: string;
}

export function UserInfo() {
  const [showMenuSettings, setShowMenuSettings] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [apiKeyIsPresent, setApiKeyIsPresent] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [inputName, setInputName] = useState('');
  const [apiKeys, setApiKeys] = useState<APIKeyData[]>([]);

  const handlePasswordChange = () => {
    setShowMenuSettings(false);
    setChangePassword(true);
  };

  const handleClose = () => {
    setOpen(false);
    setApiKey('');
    setApiKeyIsPresent(true);
  };

  const showSettings = () => {
    setShowMenuSettings(true);
    setChangePassword(false);
  };

  const copyToClipboard = async () => {
    try {
      if (apiKey) {
        await navigator.clipboard.writeText(apiKey);
        console.log('Copied to clipboard successfully');
      }
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const generateRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomString;
  };

  const generateAPIKey = () => {
    const apiKeyLength = 255;
    const randomKey = generateRandomString(apiKeyLength);
    setApiKey(randomKey);
  };

  const addAPIKeyToTable = () => {
    const newAPIKey = {
      name: inputName || 'GeneratedKey',
      created: new Date().toLocaleString(),
      key: apiKey,
    };
    setApiKeys((prevKeys) => [...prevKeys, newAPIKey]);
    handleClose();
  };

  const deleteAPIKey = (indexToRemove) => {
    setApiKeys((prevKeys) => prevKeys.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  return (
    <YStack space bg="$background" width="100%" minWidth={900}>
      <YStack bg="$backgroundStrong" pl="$4" m="$4" elevation="$0.5">
        <XStack space="$6" jc="flex-start" ai="center" m="$4">
          <Button icon={<Info />} bg="$backgroundHover" onPress={showSettings} fontFamily="$buffaloWestern">
            INFO
          </Button>
          <Button icon={<Lock />} bg="$backgroundHover" onPress={handlePasswordChange} fontFamily="$buffaloWestern">
            CHANGE PASSWORD
          </Button>
        </XStack>
        <YStack pl="$5" mt="$3">
          <Paragraph  mb="$4" fontFamily="$ifcWildRodeo">Admin@yacht.local</Paragraph>
          <Paragraph  mb='$3'fontFamily="$ifcWildRodeo">Manage admin@yacht.local</Paragraph>
          {changePassword && (
            <YStack space mt="$2" mr="$7" mb="$6" elevation="$0.5">
              <YStack space bg="$backgroundStrong" p="$3" pl="$1">
                <H4 pl="$3" fontFamily="$ifcWildRodeo">Change Password</H4>
              </YStack>
              <Paragraph pl="$6" fontFamily="$ifcWildRodeo">You can also change just your email here (or both your email and password).</Paragraph>
              <YStack space="$3" ai="flex-start" pl="$6" pr="$2">
                <Input placeholder="Email" width="50%" />
                <Input placeholder="Password" width="50%" />
                <Input placeholder="Confirm Password" width="50%" />
                <XStack jc="space-evenly" space>
                  <Button onPress={handleClose} fontFamily="$ifcWildRodeo" mb="$6">Change User Info</Button>
                </XStack>
              </YStack>
            </YStack>
          )}
          {showMenuSettings && (
            <YStack space mt="$3" mr="$7" mb="$4" elevation="$0.5">
              <YStack space bg="$BackgroundStrong" p="$2">
                <H4 pl="$3" fontFamily="$ifcWildRodeo">User Settings</H4>
              </YStack>
              <H4 pl="$6" fontFamily="$ifcWildRodeo">This is where you can change settings related to your user account.</H4>
              <YStack>
                <XStack space="$3" ai="center" pl="$6" pr="$2" mb='$2'>
                  <H3 mt="$1" mb="$2" fontFamily="$ifcWildRodeo">
                    API Keys
                  </H3>
                  <SimpleDialog
                    trigger={
                      <Button onPress={() => setOpen(true)} bg="$background" width={74} height={45}>
                        <Plus />
                      </Button>
                    }
                    title="Generate API Key"
                    open={open}
                  >
                    <YStack space>
                      <SizableText fontFamily="$ifcWildRodeo">
                        API Keys should be treated as a password and should only be provided
                        <Separator width="$0" />
                        to applications you trust. Once this box is closed you will be unable
                        <Separator width="$0" />
                        to retrieve this key so be sure to copy it and test your application first.
                        <Separator width="$0" />
                      </SizableText>
                      {apiKey ? (
                        <Paragraph
                          height={280}
                          width={420}
                          borderColor="black"
                          borderWidth="$1"
                          borderRadius={25}
                          padding="$4"
                          textAlign="center"
                          marginLeft="$6"
                          fontFamily="$ifcWildRodeo"
                        >
                          {apiKey}
                        </Paragraph>
                      ) : (
                        <Input placeholder="Name" onChange={handleInputChange} fontFamily="$ifcWildRodeo"/>
                      )}
                      {apiKey ? (
                        <XStack space="$3" alignItems="center">
                          <Button onPress={copyToClipboard} bg="$background" width={74} height={45} fontFamily="$ifcWildRodeo">
                            <Copy />
                          </Button>
                          <Button onPress={addAPIKeyToTable} fontFamily="$ifcWildRodeo">CLOSE</Button>
                        </XStack>
                      ) : (
                        <Button onPress={generateAPIKey} fontFamily="$ifcWildRodeo">GENERATE API KEY</Button>
                      )}
                    </YStack>
                  </SimpleDialog>
                </XStack>
                {apiKeyIsPresent && (
                  <YStack>
                    <XStack ai="center">
                      <TableCol width="5%" maxWidth="9%">
                        <TableCell fontWeight="600" bg="$blue10Light" fontFamily="$ifcWildRodeo">
                          Name
                        </TableCell>
                        {apiKeys.map((item, index) => (
                          <TableCell key={index} fontFamily="$ifcWildRodeo">{item.name}</TableCell>
                        ))}
                      </TableCol>
                      <TableCol width="5%" maxWidth="9%">
                        <TableCell fontWeight="600" bg="$blue10Light" fontFamily="$ifcWildRodeo">
                          Created Time
                        </TableCell>
                        {apiKeys.map((item, index) => (
                          <TableCell key={index} fontFamily="$ifcWildRodeo">{item.created}</TableCell>
                        ))}
                      </TableCol>
                      <TableCol width="5%" maxWidth="9%">
                        <TableCell fontWeight="600" bg="$blue10Light" fontFamily="$ifcWildRodeo">
                          API Key
                        </TableCell>
                        {apiKeys.map((item, index) => (
                          <TableCell key={index} fontFamily="$ifcWildRodeo">{item.key}</TableCell>
                        ))}
                      </TableCol>
                      <TableCol width="5%" maxWidth="6%">
                        <TableCell fontWeight="600" bg="$blue10Light" fontFamily="$ifcWildRodeo">
                          Actions
                        </TableCell>
                        {apiKeys.map((item, index) => (
                          <TableCell key={index} als="center">
                            <Button icon={<Trash />} onPress={() => deleteAPIKey(index)} fontFamily="$ifcWildRodeo"/>
                          </TableCell>
                        ))}
                      </TableCol>
                    </XStack>
                  </YStack>
                )}
              </YStack>
            </YStack>
          )}
        </YStack>
      </YStack>
    </YStack>
  );
}
