import {useCallback, useState} from "react";
import "./App.css";
import {Box, Button, Center, HStack, Text} from "@chakra-ui/react";
import {data} from "./text";
import {motion} from "framer-motion";

const App = () => {
  const [count, setCount] = useState(0);
  const variant = {
    hidden: {
      opacity: 0,
      translateY: -40
    },
    visible: {
      opacity: 1,
      translateY: 0
    }
  };
  console.log(count)
  const handleNextMessage = useCallback(() => {
    if (!data[count].isQuestion && count < 19) {
      setCount(cnt => cnt + 1);
    }
  }, [data, count]);

  const handleYesMessage = useCallback(() => {
    setCount(cnt => cnt + 1);
  },[])

  const handleLastMessage = useCallback(() => {
    setCount(data.length - 1);
  },[data]);

  return (
    <Center h="100vh"
            w="100%"
            bgGradient='linear(#F8D49A,#F7E6CA)'
            flexDirection='column'
            onClick={handleNextMessage}>
      <motion.div
        key={data[count].message}
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1
        }}>
        <Box p={4} mx={4} bg="pink.200" rounded="lg">
          <Text textAlign="center"
                fontWeight="bolder"
                fontSize="md">{data[count].message}</Text>
          {
            data[count-1]?.isQuestion && (
              <Text>♥️♥️♥️♥️♥️♥️♥️️♥️</Text>
            )
          }
        </Box>
      </motion.div>
      {
        data[count].isQuestion && (
          <motion.div variants={variant}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        duration: 1
                      }}>
            <HStack w="100%" mt={3}>
              <Button colorScheme='cyan' variant='solid' onClick={handleYesMessage}>
                Yes
              </Button>
              <Button colorScheme='gray' variant='outline' onClick={handleLastMessage}>
                No
              </Button>
            </HStack>
          </motion.div>
        )
      }
    </Center>
  );
};

export default App;
