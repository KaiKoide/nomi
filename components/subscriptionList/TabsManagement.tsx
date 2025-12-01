import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabsManagement = () => {
  return (
    <Tabs defaultValue="account" className="w-full flex flex-col items-center">
      <TabsList className="w-full">
        <TabsTrigger value="account">All</TabsTrigger>
        <TabsTrigger value="password">Entertainment</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};
