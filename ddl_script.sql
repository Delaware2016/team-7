USE [AcceleratedDE]
GO
/****** Object:  Table [dbo].[ActivityTable]    Script Date: 10/7/2016 10:55:51 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ActivityTable](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Points] [int] NULL,
	[ActivityID] [int] NOT NULL,
	[DateOfActivity] [nchar](10) NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Activity_Name] [nvarchar](max) NOT NULL,
	[Activity_Description] [text] NULL,
	[UserAttendEvent] [binary](50) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[User_Information]    Script Date: 10/7/2016 10:55:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Information](
	[User_ID] [int] IDENTITY(1,1) NOT NULL,
	[First_Name] [nvarchar](50) NOT NULL,
	[Last_Name] [nvarchar](50) NOT NULL,
	[Street_Address] [nvarchar](max) NULL,
	[Zipcode] [tinyint] NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Phone_Number] [int] NOT NULL,
	[Points] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
